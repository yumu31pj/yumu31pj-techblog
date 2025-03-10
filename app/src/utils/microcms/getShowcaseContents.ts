import type { MicroCMSAuthType } from "~/src/types/ApiTypes";
import { getMicroCMSClient } from "~/src/utils/microcms/getMicroCMSClient";

const getShowcaseContents = async (endpoint: string, auth: MicroCMSAuthType, perPage?: number) => {
  if (!auth.serviceDomain || !auth.apiKey) {
    throw new Error("環境変数でサービスドメイン、またはAPIキーが設定されていません。");
  }

  const client = getMicroCMSClient(auth.serviceDomain, auth.apiKey);

  let apiResponse;

  if (perPage) {
    apiResponse = await client.get({
      endpoint: endpoint,
      queries: {
        limit: perPage,
        orders: `-updatedAt`
      }
    })
  } else {
    apiResponse = await client.get({
      endpoint: endpoint,
      queries: {
        limit: 100,
        orders: `-updatedAt`
      }
    })
  }

  return apiResponse;
}

export default getShowcaseContents;