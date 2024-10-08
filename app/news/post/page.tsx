import Loader from "@/components/atoms/images/Loader/Loader";
import SectionWrapper from "@/components/layouts/wrappers/SectionWrapper/SectionWrapper";
import { SiteInfo } from "app/_src/configs/siteInfo";
import { Metadata } from "next";
import { Suspense } from "react";
import NewsContent from "./_components/NewsContent";

export const metadata: Metadata = {
  title: "NEWS | " + SiteInfo.siteTitle,
  description: "News | " + SiteInfo.siteDescription,
};

const PageNewsSingle = () => {
  return (
    <SectionWrapper id="newsArchive">
      <Suspense fallback={<Loader />}>
        <NewsContent />
      </Suspense>
    </SectionWrapper>
  )
}

export default PageNewsSingle