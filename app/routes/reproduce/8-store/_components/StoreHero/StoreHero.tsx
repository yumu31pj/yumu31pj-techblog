import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureProps } from "~/src/types/PartsProps.types";
import { StoreLogo } from "../StoreLogo/StoreLogo";
import styles from "./StoreHero.module.scss";

type StoreHeroProps = {
  imageItem: PictureProps;
}

export const StoreHero = (props: StoreHeroProps) => {
  const {imageItem} = props;

  return (
    <div className={styles["c-hero"]}>
      <Picture pictureItem={imageItem.pictureItem} />
      <div className={styles["c-hero__logo"]}>
        <StoreLogo />
      </div>
    </div>
  )
}