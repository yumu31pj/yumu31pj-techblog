import parse from "html-react-parser";
import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureProps } from "~/src/types/PartsProps.types";
import styles from "./PortfolioWorksBox.module.scss";

export type PortfolioWorksBoxProps = {
  title: string;
  imageItem: PictureProps
  overview: string;
}

export const PortfolioWorksBox = (props: PortfolioWorksBoxProps) => {
  const {title, imageItem, overview} = props;

  return (
    <div className={styles["c-workbox"]}>
      <Picture pictureItem={imageItem.pictureItem} />
      <h3>{title}</h3>
      <div className={styles["c-workbox__overview"]}>{parse(overview)}</div>
    </div>
  )
}