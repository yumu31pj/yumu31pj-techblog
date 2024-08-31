import useFetchTotalCountByEndpoint from "@/hooks/microCMS/useFetchTotalCountByEndpoint.hooks";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { MicroCMSAuth } from "../configs/microCMSApi";
import { BlogQuery } from "../configs/MicroCMSQueries";

// BlogTotalCountContext をコンポーネント外で定義
const BlogTotalCountContext = createContext<any>(null);

const BlogTotalCountProvider = ({children}: {children: ReactNode}) => {
  const [totalCountNum, setTotalCountNum] = useState();

  const {isLoading, totalCount, hasError, errorMessage} = useFetchTotalCountByEndpoint(MicroCMSAuth, BlogQuery);

  useEffect(() => {
    if (totalCount !== undefined) {
      setTotalCountNum(totalCount);
    }
  }, [totalCount]);

  const value = useMemo(() => ({ totalCountNum, setTotalCountNum }), [totalCountNum]);

  return (
    <BlogTotalCountContext.Provider value={value}>
      {children}
    </BlogTotalCountContext.Provider>
  )
}

export { BlogTotalCountContext, BlogTotalCountProvider };

