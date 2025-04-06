import Picture from "~/src/components/parts/images/Picture/Picture";
import { MarkPrefixTitle } from "~/src/components/parts/titles/MakedPrefixTitle/MakedPrefixTitle";
import type { CorporateHomeSectionBusinessType, CorporateImageLinkType } from "../../../types/CorporateType";
import { CorporateSectionTitle } from "../../common/CorporateSectionTitle/CorporateSectionTitle";
import { CorporateSectionWrapper } from "../../common/CorporateSectionWrapper/CorporateSectionWrapper";
import styles from "./CorporateHomeSectionBusiness.module.scss";

export const CorporateHomeSectionBusiness = ({id, titleItem, imageLinkItems} : CorporateHomeSectionBusinessType ) => {

  const groupedItems = imageLinkItems.reduce((acc: CorporateImageLinkType[][], item, index) => {
    if (index % 2 === 0) {
      acc.push([item])
    } else {
      acc[acc.length - 1].push(item); 
    }
    return acc;
  }, []);
  
  return (
    <CorporateSectionWrapper id={"business"}>
      <CorporateSectionTitle {...titleItem} />
      <div className={styles["c-business-gallery"]}>
        {groupedItems.map((group, groupIndex) => (
          <div key={groupIndex} className={`${styles["c-business-gallery-group-box"]} ${groupIndex % 2 == 0 ? styles["c-business-gallery-group-box--even"] : styles["c-business-gallery-group-box--odd"]}`}>
            {group.map((item, itemIndex) => (
              <div key={itemIndex} className={styles["c-business-gallery-group-box__item"]}>
                <MarkPrefixTitle
                  title={item.linkItem.title}
                  tagType={"h3"}
                  markType={"hyphen"}
                />
                <a href={item.linkItem.linkTo}>
                  <Picture
                    srcSP={item.srcSP}
                    srcSPWebp={item.srcSPWebp}
                    altText={item.altText}
                    breakpoint={item.breakpoint}
                    isLazy={item.isLazy}
                  />
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </CorporateSectionWrapper>
  )
}