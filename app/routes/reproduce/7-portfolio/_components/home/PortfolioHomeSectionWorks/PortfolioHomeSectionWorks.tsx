import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureProps } from "~/src/types/PartsProps.types";
import { PortfolioSectionContainer } from "../../common/PortfolioSectionContainer/PortfolioSectionContainer";
import { PortfolioSectionTitle } from "../../common/PortfolioSectionTitle/PortfolioSectionTitle";
import styles from "./PortfolioHomeSectionWorks.module.scss";

export type PortfolioHomeSectionWorksProps = {
  worksItems: {
    imageItem: PictureProps;
    linkTo: string;
  } [];
}

export const PortfolioHomeSectionWorks = (props: PortfolioHomeSectionWorksProps) => {
  const {worksItems} = props;
  return (
    <PortfolioSectionContainer id="works" marginTop="70-130">
      <PortfolioSectionTitle title="Works" />
      <div className={styles["c-works"]}>
        {worksItems.map((item, key:number) => (
          <a key={key} href={item.linkTo}>
            <Picture pictureItem={item.imageItem.pictureItem} />
          </a>
        ))}
      </div>
    </PortfolioSectionContainer>
  )
}