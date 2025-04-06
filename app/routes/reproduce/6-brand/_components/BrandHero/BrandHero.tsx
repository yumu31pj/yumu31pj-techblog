import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureType } from "~/src/types/PartsProps.types";
import styles from "./BrandHero.module.scss";

export const BrandHero = (imageItem: PictureType) => {

  return (
    <div className={styles['c-hero']}>
      <Picture {...imageItem} />
    </div>
  )
}