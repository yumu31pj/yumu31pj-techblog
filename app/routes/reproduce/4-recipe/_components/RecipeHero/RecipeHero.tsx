import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureProps } from "~/src/types/PartsProps.types";
import styles from "./RecipeHero.module.scss";

export const RecipeHero = (props: PictureProps) => {
  const {pictureItem} = props;
  return (
    <div className={styles["c-hero"]}>
      <Picture pictureItem={pictureItem} />
    </div>
  )
}