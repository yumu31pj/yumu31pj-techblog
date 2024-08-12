import SimpleTitleH2 from "@/_libs/components/atoms/titles/SimpleTitle/SimpleTitleH2/SimpleTitleH2";
import SectionWrapper from "@/_libs/components/layouts/wrappers/SectionWrapper/SectionWrapper";
import ArchiveBox from "@/_src/_common/components/organisms/ArchiveBox/ArchiveBox";
import { microCMSAuth } from "@/_src/configs/microCMSApi";
import { BlogQuery } from "@/_src/configs/MicroCMSQueries";
import { Suspense } from "react";

const PageBlog = () => {
  return (
    <SectionWrapper id="blog">
      <SimpleTitleH2 title="Blog Archive" />
      <Suspense>
        <ArchiveBox
          microCMSAuth={microCMSAuth}
          microCMSQuery={BlogQuery}
        />
      </Suspense>
    </SectionWrapper>
  )
}

export default PageBlog;