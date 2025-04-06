import type { NewsSectionContextsType } from "../../../types/CorporateType";
import { CorporateSectionTitle } from "../../common/CorporateSectionTitle/CorporateSectionTitle";
import { CorporateSectionWrapper } from "../../common/CorporateSectionWrapper/CorporateSectionWrapper";
import { CorporateHomeNewsItems } from "../CorporateHomeNewsItems/CorporateHomeNewsItems";
import styles from "./CorporateHomeSectionNews.module.scss";

export const CorporateHomeSectionNews = ({titleItem, newsItems} : NewsSectionContextsType) => {
  return (
    <CorporateSectionWrapper id="news">
      <CorporateSectionTitle {...titleItem}/>
      <div className={styles["c-news-container"]}>
        <CorporateHomeNewsItems newsItems={newsItems} />
      </div>
    </CorporateSectionWrapper>
  )
}