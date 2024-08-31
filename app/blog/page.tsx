import SimpleTitleH2 from "@/components/atoms/titles/SimpleTitle/SimpleTitleH2/SimpleTitleH2";
import SectionWrapper from "@/components/layouts/wrappers/SectionWrapper/SectionWrapper";
import ArticleLayout from "app/_src/components/layouts/ArticleLayout/ArticleLayout";
import ArchiveBox from "app/_src/components/organisms/archives/ArchiveBox/ArchiveBox";
import CategoryList from "app/_src/components/organisms/CategoryList/CategoryList";
import { MicroCMSAuth } from "app/_src/configs/microCMSApi";
import { BlogQuery } from "app/_src/configs/MicroCMSQueries";
import { SiteInfo } from "app/_src/configs/siteInfo";
import { BlogCategoryListProvider } from "app/_src/contexts/BlogCategoryListContext.provider";
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
              microCMSAuth={MicroCMSAuth}
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