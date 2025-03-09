import type { MicroCMSAuthType } from "~/src/types/ApiTypes";
import { getMicroCMSClient } from "~/src/utils/microcms/getMicroCMSClient";

/**
 * 
 * @param endpoint 
 * @param auth : サービスドメインとAPIキー
 * @param id : 投稿ID
 * @returns 
 */
const getBlogCategory = async (endpoint: string, auth: MicroCMSAuthType, id: string) => {
  const client = getMicroCMSClient(auth.serviceDomain, auth.apiKey);

  const response = await client.get({
    endpoint: endpoint,
    contentId: id
  });

  return response;
}

export default getBlogCategory;