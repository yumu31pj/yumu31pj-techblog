import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureType } from "~/src/types/PartsProps.types";
import styles from "./RecipeHero.module.scss";

export const RecipeHero = (pictureItem: PictureType) => {
  return (
    <div className={styles["c-hero"]}>
      <Picture {...pictureItem} />
    </div>
  )
}