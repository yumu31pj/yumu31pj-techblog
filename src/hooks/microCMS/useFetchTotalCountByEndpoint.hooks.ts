
import { MicroCMSAuthType } from "@/types/MicroCMSAuth.types";
import { MicroCMSQueryBasicType } from "@/types/MicroCMSQueries.types";
import { getMicroCMSConnection } from "@/utils/getMicroCMSClient";
import { useEffect, useState } from "react";
const useFetchTotalCountByEndpoint = (
  microCMSAuth: MicroCMSAuthType, 
  microCMSQuery: MicroCMSQueryBasicType, 
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState<any>();
  const [hasError, setHasError] = useState(false);
  const errorMessage = "Failed to fetch totalCount";

  useEffect(() => {
    const client = getMicroCMSConnection(microCMSAuth);

    const getContentsList = async() => {
      try {
        const apiResponse = await client.get({
          endpoint: microCMSQuery.endpointId,
          queries: {
            limit: 1
          }
        });
        setTotalCount(apiResponse.totalCount)
      } catch (e) {
        console.error(e);
        setHasError(true);
      } finally {
        setIsLoading(false)
      }
    };
    getContentsList();
  },[])
  return {isLoading, totalCount, hasError, errorMessage};
}

export default useFetchTotalCountByEndpoint;