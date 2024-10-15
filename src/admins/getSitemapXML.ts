import fs from 'fs-extra';
import path from 'path';
import { SiteInfo } from "../../app/_src/configs/siteInfo";
import { MicroCMSAuthType } from '../types/MicroCMSAuth.types';
import { MicroCMSQueryBasicType } from '../types/MicroCMSQueries.types';
import { getMicroCMSConnection } from '../utils/getMicroCMSClient';

interface ContentType {
  id: string;
  publishedAt: string;
}

// ローカルファイルのsitemap生成関数
export default async function getSitemap(appDirectory: string, microCMSAuth: MicroCMSAuthType, microCMSQueries: MicroCMSQueryBasicType[]) {
  let baseUrl = SiteInfo.siteUrl;

  // Add trailing slash to baseUrl if it's missing
  if (!baseUrl.endsWith('/')) {
    baseUrl += '/';
  }

  const outDir = path.join(process.cwd(), 'out');
  const sitemapPath = path.join(outDir, 'sitemap.xml');
  const urls: { loc: string, lastmod: string }[] = [];

  async function traverseDir(currentPath: string, currentUrl: string) {
    const files = await fs.readdir(currentPath);
    for (const file of files) {
      const fullPath = path.join(currentPath, file);
      const stat = await fs.stat(fullPath);

      if (stat.isDirectory()) {
        await traverseDir(fullPath, currentUrl + file + '/');
      } else if (file === 'page.tsx' && currentPath !== appDirectory) {
        const url = currentUrl.replace(/\\/g, '/');
        const lastmod = formatLastmodDate(stat.mtime); // Format lastmod date
        urls.push({ loc: url, lastmod });
      }
    }
  }

  // Add top level URL for /app/page.tsx
  const topLevelUrl = `${baseUrl}`;
  const pageTsxPath = path.join(appDirectory, 'page.tsx');
  const stat = await fs.stat(pageTsxPath);
  const lastmod = formatLastmodDate(stat.mtime); // Format lastmod date
  urls.push({ loc: topLevelUrl, lastmod });

  await traverseDir(appDirectory, baseUrl);

  // microCMSからのデータを結合
  await getSitemapXMLFromMicroCMS(baseUrl, microCMSAuth, microCMSQueries, urls);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url.loc}</loc><lastmod>${url.lastmod}</lastmod></url>`).join('\n')}
</urlset>`;

  await fs.ensureDir(outDir);
  await fs.writeFile(sitemapPath, sitemap, 'utf-8');
  console.log(`Sitemap has been generated at ${sitemapPath}`);
}

// microCMSからデータを取得し、urls配列に追加する関数
const getSitemapXMLFromMicroCMS = async (
  url: string,
  microCMSAuth: MicroCMSAuthType,
  microCMSQueries: MicroCMSQueryBasicType[],
  urls: { loc: string, lastmod: string }[]
) => {
  const client = getMicroCMSConnection(microCMSAuth);

  const getAllContents = async (query: MicroCMSQueryBasicType) => {
    try {
      const apiResponse = await client.getAllContents({
        endpoint: query.endpointId,
        queries: {
          fields: "id,publishedAt"
        }
      });
      return apiResponse;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  for (const query of microCMSQueries) {
    const response = await getAllContents(query);

    if (response.length > 0) {
      const fullPath = url.replace(/\/$/, '') + (query.singlePath.startsWith('/') ? '' : '/') + query.singlePath;
      response.forEach((post: ContentType) => {
        urls.push({
          loc: `${fullPath}${post.id}`,
          lastmod: post.publishedAt
        });
      });
    }
  }
}

// lastmodフォーマット関数
function formatLastmodDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = `0${date.getUTCMonth() + 1}`.slice(-2);
  const day = `0${date.getUTCDate()}`.slice(-2);
  const hours = `0${date.getUTCHours()}`.slice(-2);
  const minutes = `0${date.getUTCMinutes()}`.slice(-2);
  const seconds = `0${date.getUTCSeconds()}`.slice(-2);
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+09:00`;
}
