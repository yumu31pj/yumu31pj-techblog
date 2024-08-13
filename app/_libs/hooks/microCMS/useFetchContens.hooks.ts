
import { MicroCMSAuthType } from "@/_libs/types/MicroCMSAuth.types";
import { MicroCMSQueryBasicType } from "@/_libs/types/MicroCMSQueries.types";
import { getMicroCMSConnection } from "@/_libs/utils/getMicroCMSClient";
import { useEffect, useState } from "react";

const useFetchContens = (
  microCMSAuth: MicroCMSAuthType, 
  microCMSQuery: MicroCMSQueryBasicType, 
  offset: number = 0,

) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState<any>();
  const [hasError, setHasError] = useState(false);
  const errorMessage = "Failed to fetch contents";

  const postsPerPage = microCMSQuery.postsPerPage ? microCMSQuery.postsPerPage: 10;
  const orderType = microCMSQuery.order ? microCMSQuery.order : '-publishedAt'

  useEffect(() => {
    const client = getMicroCMSConnection(microCMSAuth);

    const getContentsList = async() => {
      try {
        const apiResponse = await client.get({
          endpoint: microCMSQuery.endpointId,
          queries: {
            orders: orderType,
            offset: offset,
            limit: postsPerPage
          }
        });
        setResponse(apiResponse)
      } catch (e) {
        console.error(e);
        setHasError(true);
      } finally {
        setIsLoading(false)
      }
    };
    getContentsList();
  },[])
  return {isLoading, response, hasError, errorMessage};
}

export default useFetchContens;