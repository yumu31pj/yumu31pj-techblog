import { PerPage } from "~/src/configs/SiteInfo";
import type { MicroCMSAuthType } from "~/src/types/ApiTypes";
import { getMicroCMSClient } from "~/src/utils/microcms/getMicroCMSClient";

/**
 * 
 * @param endpoint 
 * @param auth : サービスドメインとAPIキー
 * @param limit : 取得上限
 * @param offset : オフセット（何件目から取得するか）
 * @returns 
 */
const ssf_getBlogContents = async (endpoint: string, auth: MicroCMSAuthType, limit?: number, offset?: number, category?: string) => {
  if (!auth.serviceDomain || !auth.apiKey) {
    throw new Error("環境変数 NEXT_PUBLIC_SERVICE_DOMAIN または NEXT_PUBLIC_API_KEY が設定されていません。");
  }

  const perPage = limit ? limit : PerPage;
  const queryOffset = offset ? offset * perPage : 0;
  
  const client = getMicroCMSClient(auth.serviceDomain, auth.apiKey);

  console.log(category);

  let response = [];

  if (category) {
    response = await client.get({ 
      endpoint: endpoint,
      queries: {
        limit: perPage,
        orders: '-updatedAt',
        offset: queryOffset,
        filters: `categories[contains]${category}`
      }
    });
  } else {
    response = await client.get({ 
      endpoint: endpoint,
      queries: {
        limit: perPage,
        orders: '-updatedAt',
        offset: queryOffset
      }
    });
  }

  

  return response;
}

export default ssf_getBlogContents;