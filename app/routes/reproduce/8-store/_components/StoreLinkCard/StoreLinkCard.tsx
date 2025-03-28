import parse from "html-react-parser";
import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureProps } from "~/src/types/PartsProps.types";
import styles from "./StoreLinkCard.module.scss";

export type StoreLinkCardProps = {
  cardItem: {
    title: string;
    overview: string;
    imageItem: PictureProps;
    linkTo: string;
  }
}

export const StoreLinkCard = (props: StoreLinkCardProps) => {
  const { cardItem } = props;

  return (
    <div className={styles["c-link-card"]}>
      <a href={cardItem.linkTo}>
        <Picture pictureItem={cardItem.imageItem.pictureItem} />
        <div className={styles["c-link-card-infomation"]}>
          <h3>{cardItem.title}</h3>
          <p>{parse(cardItem.overview)}</p>
        </div>
      </a>
    </div>
  )
}