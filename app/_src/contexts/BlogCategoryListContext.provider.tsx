'use client';

import useFetchCategoryList from "@/_libs/hooks/microCMS/useFetchCategoryList.hooks";
import { createContext, useEffect, useMemo, useState } from "react";
import { microCMSAuth } from "../configs/microCMSApi";
import { CategoryQuery } from "../configs/MicroCMSQueries";

const BlogCategoryListContext = createContext<any>(null);

const BlogCategoryListProvider = ({children}: {children: React.ReactNode}) => {
  const [blogCategoryList, setBlogCategoryList] = useState();

  const {isLoading, response, hasError, errorMessage} = useFetchCategoryList(microCMSAuth, CategoryQuery)

  useEffect(() => {
    if (response && response.contents) {
      const categories = response.contents.map((category: { name: string; slug: string }) => ({
        name: category.name,
        slug: category.slug,
      }));
      setBlogCategoryList(categories);
    }
  }, [response]);

  const value = useMemo(() => ({ blogCategoryList, setBlogCategoryList}), [blogCategoryList]);

  return (
    <BlogCategoryListContext.Provider value={value}>
      {children}
    </BlogCategoryListContext.Provider>
  )
}

export { BlogCategoryListContext, BlogCategoryListProvider };
