import { MicroCMSAuth } from 'app/_src/configs/microCMSApi';
import { BlogQuery, QueryForSitemap } from 'app/_src/configs/MicroCMSQueries';
import { SiteInfo } from 'app/_src/configs/siteInfo';
import path from 'path';
import getSitemap from "./getSitemapXML";
import getSitemapXMLFromMicroCMS from "./getSitemapXMLFromMicroCMS";

const generateSitemapXML = () => {
  const appDirectory = path.join(process.cwd(), 'app');
  getSitemap(appDirectory);

  const url = SiteInfo.siteUrl;
  const microCMSAuth = MicroCMSAuth;
  const microCMSQuery = BlogQuery;

  getSitemapXMLFromMicroCMS(url, microCMSAuth, QueryForSitemap.endpoints);
}

generateSitemapXML();