"use client";

import { useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { useGetElementHeight } from "~/src/hooks/useGetElementHeight";
import { headerHeightAtom } from "~/src/stores/headerHeightAtom";
import { CorporateContactButtonContext, CorporateNavigationContext } from "../../../_contexts/CorporateContexts";
import { CorporateContactButton } from "../CorporateContact/CorporateContactButton";
import { Corporatelogo } from "../CorporateLogo/CorporateLogo";
import { CorporateNavigation } from "../CorporateNavigation/CorporateNavigation";
import styles from "./CorporateHeader.module.scss";



export const CorporateHeader = () => {
  const ref = useRef<HTMLElement>(null);
  const headerHeight = useGetElementHeight(ref);

  // The header height is stored by 'jotai'
  // Therefore get the function to update Atom using useSetAtom of 'jotai' here
  const setHeaderHeightAtom = useSetAtom(headerHeightAtom);
  
  useEffect(() => {
    // Update headerHeightAtom stored by 'jotai'
    setHeaderHeightAtom(headerHeight)
  }, [headerHeight, setHeaderHeightAtom])

  return (
    <header id="header" className={styles["c-header"]} ref={ref}>
      <div className={styles["c-header__navigation-links"]}>
        <Corporatelogo />
        <div className={styles["c-header__navigation-container"]}>
          <CorporateNavigation navigationItems={CorporateNavigationContext} />
        </div>
      </div>  
      <div className={styles["c-header__contact-button-container"]}>
        <CorporateContactButton {...CorporateContactButtonContext} />
      </div>
    </header>
  )
}