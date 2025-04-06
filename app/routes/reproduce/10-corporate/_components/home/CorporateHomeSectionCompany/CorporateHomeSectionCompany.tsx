import Picture from "~/src/components/parts/images/Picture/Picture";
import type { CorporateHomeSectionCompanyType } from "../../../types/CorporateType";
import { CorporateSectionTitle } from "../../common/CorporateSectionTitle/CorporateSectionTitle";
import { CorporateSectionWrapper } from "../../common/CorporateSectionWrapper/CorporateSectionWrapper";
import { CorporateProfile } from "../CorporateProfile/CorporateProfile";
import styles from "./CorporateHomeSectionCompany.module.scss";

export const CorporateHomeSectionCompany = ({id, titleItem, imageItems, profileItems} : CorporateHomeSectionCompanyType) => {
  return (
    <CorporateSectionWrapper id={id}>
      <div className={styles["c-company"]}>
        <div className={styles["c-company__image"]}>
          <Picture {...imageItems} />
        </div>
        <div className={styles["c-company__content"]}>
          <CorporateSectionTitle {...titleItem} />
          <div className={styles["c-company__detail-wrapper"]}>
            <CorporateProfile profileItems={profileItems} />
          </div>
        </div>
      </div>
    </CorporateSectionWrapper>
  )
}