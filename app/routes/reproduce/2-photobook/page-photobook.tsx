import { SiteInfo } from "~/src/configs/SiteInfo";
import type { Route } from "../+types/reproduce-layout";
import { PhotobookFooter } from "./_components/PhotobookFooter/PhotobookFooter";
import { PhotobookHeader } from "./_components/PhotobookHeader/PhotobookHeader";
import { PhotobookHero } from "./_components/PhotobookHero/PhotobookHero";
import { SectionPhotobookDetail } from "./_components/SectionPhotobookDetail/SectionPhotobookDetail";
import { PhotobookIndexContext } from "./_components/SectionPhotobookIndex/PhotobookIndex.context";
import { SectionPhotobookIndex } from "./_components/SectionPhotobookIndex/SectionPhotobookIndex";
import styles from "./page-photobook.module.scss";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "デザインカンプ模写: Photobook" },
    { name: "description", content: SiteInfo.description },
  ];
}

const PagePhotobook = () => {
  return (
    <div className={styles["l-photobook-container"]}>
      <PhotobookHeader />
      <PhotobookHero />
      <SectionPhotobookIndex indexItems={PhotobookIndexContext.indexItems} />
      <SectionPhotobookDetail />
      <PhotobookFooter />
    </div>
  )
}

export default PagePhotobook;