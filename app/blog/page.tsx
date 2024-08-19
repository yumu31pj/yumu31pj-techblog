import SimpleTitleH2 from "@/_libs/components/atoms/titles/SimpleTitle/SimpleTitleH2/SimpleTitleH2";
import SectionWrapper from "@/_libs/components/layouts/wrappers/SectionWrapper/SectionWrapper";
import ArticleLayout from "@/_src/components/layouts/ArticleLayout/ArticleLayout";
import ArchiveBox from "@/_src/components/organisms/ArchiveBox/ArchiveBox";
import CategoryList from "@/_src/components/organisms/CategoryList/CategoryList";
import { microCMSAuth } from "@/_src/configs/microCMSApi";
import { BlogQuery } from "@/_src/configs/MicroCMSQueries";
import { SiteInfo } from "@/_src/configs/siteInfo";
import { BlogCategoryListProvider } from "@/_src/contexts/BlogCategoryListContext.provider";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "My blog list" + " | " + SiteInfo.siteTitle,
  description: "My blog list" + " | " + SiteInfo.siteDescription,
  // robots: {
  //   index: false, // set noindex
  // },
};

const PageBlog = () => {
  return (
    <SectionWrapper id="blog">
      <SimpleTitleH2 title="Blog Archive" />
      <Suspense>
        <ArticleLayout
          firstComponent={
            <ArchiveBox 
              microCMSAuth={microCMSAuth}
              microCMSQuery={BlogQuery} />
          }
          secondComponent={
            <BlogCategoryListProvider>
              <CategoryList />
            </BlogCategoryListProvider>
          }
        />
      </Suspense>
    </SectionWrapper>
  )
}

export default PageBlog;