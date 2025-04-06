import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureType } from "~/src/types/PartsProps.types";
import { StoreLogo } from "../StoreLogo/StoreLogo";
import styles from "./StoreHero.module.scss";

type StoreHeroProps = {
  imageItem: PictureType;
}

export const StoreHero = (props: StoreHeroProps) => {
  const {imageItem} = props;

  return (
    <div className={styles["c-hero"]}>
      <Picture {...imageItem} />
      <div className={styles["c-hero__logo"]}>
        <StoreLogo />
      </div>
    </div>
  )
}