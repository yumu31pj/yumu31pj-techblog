import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureType } from "~/src/types/PartsProps.types";
import styles from "./PortfolioHero.module.scss";

export const PortfolioHero = (imageItem: PictureType) => {

  return (
    <div className={styles["c-hero"]}>
      <Picture {...imageItem} />
    </div>
  )
}