import fs from 'fs-extra';
import path from 'path';
import { MicroCMSAuthType } from '../types/MicroCMSAuth.types';
import { MicroCMSQueryBasicType } from '../types/MicroCMSQueries.types';
import { getMicroCMSConnection } from '../utils/getMicroCMSClient';

interface ContentType {
  id: string;
  publishedAt: string;
}

const getXMLFormat = (url: string, path: string, posts: ContentType[]) => {
  const fullPath = url.replace(/\/$/, '') + (path.startsWith('/') ? '' : '/') + path;

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts.map(post => `<url><loc>${fullPath}${post.id}</loc><lastmod>${post.publishedAt}</lastmod></url>`).join('\n')}
</urlset>`;

  return sitemapXML;
}

const generateXMLFile = (xml: string) => {
  const outDir = path.join(process.cwd(), 'out');
  const sitemapPath = path.join(outDir, 'sitemap-microcms-posts.xml');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log(`Sitemap of microCMS contents has been generated at: ${sitemapPath}`);
}

const getSitemapXMLFromMicroCMS = async (
  url: string,
  microCMSAuth: MicroCMSAuthType,
  microCMSQueries: MicroCMSQueryBasicType[]
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

  // 各クエリの結果を取得し、XMLに変換する
  let allXML = '';

  for (const query of microCMSQueries) {
    const response = await getAllContents(query);

    if (response.length > 0) {
      const sitemapXML = getXMLFormat(url, query.singlePath, response);
      allXML += sitemapXML;
    }
  }

  generateXMLFile(allXML);
}

export default getSitemapXMLFromMicroCMS;
