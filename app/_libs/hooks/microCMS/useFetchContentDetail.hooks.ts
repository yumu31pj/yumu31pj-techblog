import { getMicroCMSConnection } from "@/app/_libs/utils/getMicroCMSClient";
import { useEffect, useState } from "react";

const useFetchContentDetail = (contentId: string, endpointId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState<any>();
  const [hasError, setHasError] = useState(false);
  const errorMessage = "投稿が取得できません。";

  useEffect(() => {
    const client = getMicroCMSConnection();

    const getContent = async() => {
      try {
        let apiResponse;
        apiResponse = await client.get({
          endpoint: endpointId,
          contentId: contentId,
        });
        setResponse(apiResponse);
        
      } catch (e) {
        console.error(e);
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getContent()
  },[])
  return {isLoading, response, hasError, errorMessage}
}

export default useFetchContentDetail;