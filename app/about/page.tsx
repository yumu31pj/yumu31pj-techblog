'use client';

import { BlogCategoryListProvider } from "@/_src/contexts/BlogCategoryListContext.provider";
import { BlogTotalCountProvider } from "@/_src/contexts/BlogTotalCountContext.provider";
import CatTest from "./_components/CatTest";
import ProviderTest from "./_components/ProviderTest";

const PageAbout = () => {

  return (
      <section>
        <h2>About Page</h2>
        <p>{"Now... Under Constructing..."}</p>
        <BlogTotalCountProvider>
          <ProviderTest />
        </BlogTotalCountProvider>
        <BlogCategoryListProvider>
          <CatTest />
        </BlogCategoryListProvider>
      </section>
  )
}

export default PageAbout;
