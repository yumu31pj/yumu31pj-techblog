import { MicroCMSAuthType } from "@/_libs/types/MicroCMSAuth.types";
import { getMicroCMSConnection } from "@/_libs/utils/getMicroCMSClient";
import { useEffect, useState } from "react";

const useFetchContentDetail = (microCMSAuth: MicroCMSAuthType, contentId: string, endpointId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState<any>();
  const [hasError, setHasError] = useState(false);
  const errorMessage = "投稿が取得できません。";

  useEffect(() => {
    const client = getMicroCMSConnection(microCMSAuth);

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