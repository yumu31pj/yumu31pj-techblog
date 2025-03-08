import type { MicroCMSAuthType } from "../../types/ApiTypes";
import { getMicroCMSClient } from "../microcms/getMicroCMSClient";

/**
 * 
 * @param endpoint 
 * @param auth : サービスドメインとAPIキー
 * @returns 
 */
const getTotalPages = async (endpoint: string, auth: MicroCMSAuthType) => {
  if (!auth.serviceDomain || !auth.apiKey) {
    throw new Error("環境変数 NEXT_PUBLIC_SERVICE_DOMAIN または NEXT_PUBLIC_API_KEY が設定されていません。");
  }
  
  const client = getMicroCMSClient(auth.serviceDomain, auth.apiKey);

  const response = await client.get({ 
    endpoint: endpoint,
    queries: {
      limit: 1,
    }
  });

  return response.totalCount;
}

export default getTotalPages;