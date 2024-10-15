import path from 'path';
import { MicroCMSAuth } from '../../app/_src/configs/microCMSApi';
import { QueryForSitemap } from '../../app/_src/configs/MicroCMSQueries';
import { SiteInfo } from '../../app/_src/configs/siteInfo';
import getSitemap from "./getSitemapXML";

const generateSitemapXML = async () => {
  const appDirectory = path.join(process.cwd(), 'app');
  const url = SiteInfo.siteUrl;
  const microCMSAuth = MicroCMSAuth;
  const microCMSQueries = QueryForSitemap.endpoints;

  // getSitemapに必要な引数をすべて渡す
  await getSitemap(appDirectory, microCMSAuth, microCMSQueries);
}

generateSitemapXML();
