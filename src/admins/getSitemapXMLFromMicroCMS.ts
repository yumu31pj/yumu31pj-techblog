import fs from 'fs-extra';
import path from 'path';
import { MicroCMSAuthType } from '../types/MicroCMSAuth.types';
import { MicroCMSQueryBasicType } from '../types/MicroCMSQueries.types';
import { getMicroCMSConnection } from '../utils/getMicroCMSClient';

interface ContentType {
  id: string;
  publishedAt: string;
}

const getXMLFormat = (posts: ContentType[], fullPath: string) => {
  return posts.map(post => 
    `<url><loc>${fullPath}${post.id}</loc><lastmod>${post.publishedAt}</lastmod></url>`
  ).join('\n');
}

const generateXMLFile = (xmlContent: string) => {
  const outDir = path.join(process.cwd(), 'out');
  const sitemapPath = path.join(outDir, 'sitemap-microcms-posts.xml');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const fullXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlContent}
</urlset>`;

  fs.writeFileSync(sitemapPath, fullXML, 'utf8');
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

  let allXMLContent = '';

  for (const query of microCMSQueries) {
    const response = await getAllContents(query);

    if (response.length > 0) {
      const fullPath = url.replace(/\/$/, '') + (query.singlePath.startsWith('/') ? '' : '/') + query.singlePath;
      const sitemapXMLPart = getXMLFormat(response, fullPath);
      allXMLContent += sitemapXMLPart + '\n';
    }
  }

  generateXMLFile(allXMLContent);
}

export default getSitemapXMLFromMicroCMS;
