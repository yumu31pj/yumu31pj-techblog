import path from 'path';
import { BlogQuery } from "../../_src/configs/MicroCMSQueries";
import { MicroCMSAuth } from "../../_src/configs/microCMSApi";
import { SiteInfo } from "../../_src/configs/siteInfo";
import getSitemap from "./getSitemapXML";
import getSitemapXMLFromMicroCMS from "./getSitemapXMLFromMicroCMS";

const generateSitemapXML = () => {
  const appDirectory = path.join(process.cwd(), 'app');
  getSitemap(appDirectory);

  const url = SiteInfo.siteUrl;
  const microCMSAuth = MicroCMSAuth;
  const microCMSQuery = BlogQuery;

  getSitemapXMLFromMicroCMS(url, microCMSAuth, microCMSQuery);
}

generateSitemapXML();