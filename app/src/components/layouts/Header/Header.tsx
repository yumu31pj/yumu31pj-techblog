'use client';

import { useEffect, useRef, useState } from "react";
import { SiteInfo } from "~/src/configs/SiteInfo";
import styles from "./Header.module.scss";

const Header = () => {

  // スクロール量を取得するためのuseRef
  // ページ読み込み直後の初期値として0を設定
  const prevScrollY = useRef(0);
  const [showHeader, setShowHeader] = useState(true);
  // 200px下にスクロールしたらヘッダーを非表示にさせるための定義
  const scrollYForHeaderHidden = 200;

  useEffect(() => {
    const handleScroll = () => {
      // 現在のスクロール量を取得
      const currentScrollY = window.scrollY;
      // 現在のスクロール量が前回のスクロール量を比較
      // 現在のスクロール量が前回のスクロール量より小さい時は上向きにスクロールしているとみなす
      const isScrollingUp = currentScrollY < prevScrollY.current;

      // 現在のスクロール量がscrollYForHeaderHiddenより大きい
      // かつ、現在のスクロール量が前回のスクロール量より大きい（下向きスクロール中）
      // の場合はヘッダーを非表示にする
      if (currentScrollY > scrollYForHeaderHidden && currentScrollY > prevScrollY.current) {
        setShowHeader(false);
      } else if(isScrollingUp && currentScrollY > scrollYForHeaderHidden) {
        // 上向きにスクロール中、かつ現在のスクロール量がscrollYForHeaderHiddenより大きいときは
        // ヘッダーを表示する
        setShowHeader(true);
      }
      prevScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  return (
    <header
      id="header" 
      className={`${styles['header']} ${showHeader ? styles.scrolled : styles.hidden}`}
    >
      <a href="/">
        <h1 className={styles['header-logo']}>
          <picture>
            <source srcSet="/images/common/logo.webp" width={"500"} height={"72"} />
            <img src="/images/commmon/logo.png" alt={SiteInfo.siteTitle} width="500" height="72" />
          </picture>
        </h1>
      </a>
    </header>
  )
}

export default Header;