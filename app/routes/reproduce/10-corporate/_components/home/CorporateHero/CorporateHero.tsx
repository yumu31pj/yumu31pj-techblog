"use client";

import { useAtomValue } from "jotai";
import Picture from "~/src/components/parts/images/Picture/Picture";
import { headerHeightAtom } from "~/src/stores/headerHeightAtom";
import type { CorporateHeroContextType } from "../../../types/CorporateType";
import styles from "./CorporateHero.module.scss";

export const CorporateHero = ({
  imageItem,
} : CorporateHeroContextType) => {
  const headerHeight = useAtomValue(headerHeightAtom);

  const dynamicStyleHeight = {
    height: `calc(100vh - ${headerHeight}px)`
  } as React.CSSProperties;

  return (
    <div className={styles["c-hero"]} style={dynamicStyleHeight}>
      <Picture {...imageItem} />
    </div>
  )
}