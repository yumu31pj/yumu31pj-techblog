import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureProps } from "~/src/types/PartsProps.types";
import styles from "./BrandHero.module.scss";

export const BrandHero = (props: PictureProps) => {
  const { pictureItem } = props;

  return (
    <div className={styles['c-hero']}>
      <Picture pictureItem={pictureItem} />
    </div>
  )
}