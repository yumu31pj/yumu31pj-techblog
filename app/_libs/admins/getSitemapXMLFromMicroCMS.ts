import fs from 'fs-extra';
import path from 'path';
import { MicroCMSAuthType } from '../types/MicroCMSAuth.types';
import { MicroCMSQueryBasicType } from '../types/MicroCMSQueries.types';
import { getMicroCMSConnection } from '../utils/getMicroCMSClient';

interface ContentType {
  id: string;
  publishedAt: string;
}

interface ContentsForXML {
  url: string;
  path: string;
  posts: ContentType[];
}

const getXMLFormat = (contents: ContentsForXML) => {
  const path = contents.url.replace(/\/$/, '') + (contents.path.startsWith('/') ? '' : '/') + contents.path;

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${contents.posts.map(post => `<url><loc>${path}${post.id}</loc><lastmod>${post.publishedAt}</lastmod></url>`).join('\n')}
</urlset>`;

  return sitemapXML;
}

const generateXMLFile = (xml:string) => {
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
  microCMSQuery: MicroCMSQueryBasicType,
) => {

  const client = getMicroCMSConnection(microCMSAuth);
  const getAllContents = async() => {
    try {
      const apiResponse = await client.getAllContents({
        endpoint: microCMSQuery.endpointId,
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

  const response = await getAllContents();
  const contents = {
    url: url,
    path: microCMSQuery.singlePath,
    posts: response,
  }

  const sitemapXML = getXMLFormat(contents);
  generateXMLFile(sitemapXML);
}

export default getSitemapXMLFromMicroCMS;