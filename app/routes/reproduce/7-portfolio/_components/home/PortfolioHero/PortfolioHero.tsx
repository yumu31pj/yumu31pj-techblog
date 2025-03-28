import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureProps } from "~/src/types/PartsProps.types";
import styles from "./PortfolioHero.module.scss";

export const PortfolioHero = (props: PictureProps) => {
  const { pictureItem } = props;
  return (
    <div className={styles["c-hero"]}>
      <Picture pictureItem={pictureItem} />
    </div>
  )
}