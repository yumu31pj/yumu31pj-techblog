import parse from "html-react-parser";
import Picture from "~/src/components/parts/images/Picture/Picture";
import type { CorporateHomeSectionAboutType } from "../../../types/CorporateType";
import { CorporateSectionTitle } from "../../common/CorporateSectionTitle/CorporateSectionTitle";
import { CorporateSectionWrapper } from "../../common/CorporateSectionWrapper/CorporateSectionWrapper";
import styles from "./CorporateHomeSectionAbout.module.scss";

export const CorporateHomeSectionAbout = ({imageItem, titleItem, paragraph} : CorporateHomeSectionAboutType) => {
  
  return (
    <CorporateSectionWrapper id="about" isFullWidth={true}>
      <div className={styles["c-home-about"]}>
        <div className={styles["c-home-about__image"]}>
          <Picture {...imageItem} />
        </div>
        <div className={styles["c-home-about__content"]}>
          <CorporateSectionTitle {...titleItem} />
          <p className={styles["c-home-about__paragraph"]}>{parse(paragraph)}</p>
        </div>
      </div>
    </CorporateSectionWrapper>
  )
}