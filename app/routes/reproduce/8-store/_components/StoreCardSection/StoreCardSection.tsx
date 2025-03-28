import parse from "html-react-parser";
import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureProps } from "~/src/types/PartsProps.types";
import { StoreButton, type StoreButtonProps } from "../StoreButton/StoreButton";
import { StoreSectionTitle } from "../StoreSectionTitle/StoreSectionTitle";
import styles from "./StoreCardSection.module.scss";

export type StoreCardSectionProps = {
  contentItem: {
    title: string;
    content: string;
    imageItem: PictureProps;
    direction?: "normal" | "reverse";
    buttonItem?: StoreButtonProps;
  }
}

export const StoreCardSection = (props: StoreCardSectionProps) => {
  const { contentItem } = props;
  const baseClass = "l-div-box";
  const modifierClass = contentItem.direction ? baseClass + "--" + contentItem.direction : contentItem.direction + "--normal";

  return (
    <section className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      <div className={styles["c-box-image"]}>
        <Picture pictureItem={contentItem.imageItem.pictureItem} />
      </div>
      <div className={styles["c-box-content"]}>
        <div className={styles["c-box-content__title"]}>
          <StoreSectionTitle title={contentItem.title} />
        </div>
        <div className={styles["c-box-content__paragraph"]}>
          {parse(contentItem.content)}
        </div>
        {contentItem.buttonItem && (
          <div className={styles["c-box-content__button"]}>
            <StoreButton 
              title={contentItem.buttonItem.title}
              linkTo={contentItem.buttonItem.linkTo}
            />
          </div>
        )}
      </div>
    </section>
  )
}