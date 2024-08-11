import { getMicroCMSConnection } from "@/app/_libs/utils/getMicroCMSClient";
import { useEffect, useState } from "react";
const useFetchContens = (
  endpointId: string,
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState<any>();
  const [hasError, setHasError] = useState(false);
  const errorMessage = "Failed to fetch contents";

  useEffect(() => {
    const client = getMicroCMSConnection();

    const getContentsList = async() => {
      try {
        const apiResponse = await client.get({
          endpoint: endpointId,
          queries: {
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
  return {isLoading, response, hasError, errorMessage, endpointId};
}

export default useFetchContens;