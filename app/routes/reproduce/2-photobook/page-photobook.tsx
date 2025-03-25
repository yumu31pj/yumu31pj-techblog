import type { Route } from "../+types/reproduce-layout";
import { PhotobookFooter } from "./_components/PhotobookFooter/PhotobookFooter";
import { PhotobookHeader } from "./_components/PhotobookHeader/PhotobookHeader";
import { PhotobookHero } from "./_components/PhotobookHero/PhotobookHero";
import { SectionPhotobookDetail } from "./_components/SectionPhotobookDetail/SectionPhotobookDetail";
import { PhotobookIndexContext } from "./_components/SectionPhotobookIndex/PhotobookIndex.context";
import { SectionPhotobookIndex } from "./_components/SectionPhotobookIndex/SectionPhotobookIndex";
import styles from "./page-photobook.module.scss";

// 1.5h

export function meta({}: Route.MetaArgs) {
  return [
    { title: "2.Photo Book - デザインカンプ模写" },
    { name: "description", content: "html, css, sass, React, サンプル" },
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