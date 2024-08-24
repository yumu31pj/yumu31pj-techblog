import SimpleTitleH2 from "@/_libs/components/atoms/titles/SimpleTitle/SimpleTitleH2/SimpleTitleH2";
import SectionWrapper from "@/_libs/components/layouts/wrappers/SectionWrapper/SectionWrapper";
import { MicroCMSAuth } from "@/_src/configs/microCMSApi";
import { NewsQuery } from "@/_src/configs/MicroCMSQueries";
import { SiteInfo } from "@/_src/configs/siteInfo";
import { Metadata } from "next";
import { Suspense } from "react";
import NewsArchive from "./_components/NewsArchive";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "News | " + SiteInfo.siteTitle,
  description: "News | " + SiteInfo.siteDescription,
  // },
};

const PageNews = () => {
  return (
    <Suspense>
      <SectionWrapper id="news">
        <div className={styles["news-archive-title"]}>
          <SimpleTitleH2 title="News Archive" />
        </div>
        <NewsArchive
          microCMSAuth={MicroCMSAuth}
          microCMSQuery={NewsQuery}
        />
      </SectionWrapper>
    </Suspense>
  )
}

export default PageNews;