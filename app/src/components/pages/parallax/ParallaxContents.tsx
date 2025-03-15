import { useEffect, useRef } from "react";
import styles from "./ParallaxContents.module.scss";

export const ParallaxContents = () => {
  const contentsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // IntersectionObserver でビューポートに入ったかどうか監視
    // entriesはIntersectionObserverオブジェクトの配列
    // entriesは`https://developer.mozilla.org/ja/docs/Web/API/IntersectionObserverEntry`のインスタンスプロパティを参照
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // ビューポートに入ったら以下を実行
          entry.target.classList.add(styles.show);
          observer.unobserve(entry.target);
        }
      });
    });

    contentsRef.current.forEach((ref) => {
      if (ref) {
        // 監視対象要素の監視を開始
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles['parallax-container']}>
      <div className={`${styles["parallax-bg"]} ${styles["parallax-bg--1st"]}`}>
        <p className={styles["parallax-text"]}>parallax1つ目の背景画像</p>
      </div>
      <div ref={(element) => { contentsRef.current[0] = element; }} className={styles["parallax-contents"]}>
        <p>１つ目</p>
      </div>

      <div className={`${styles["parallax-bg"]} ${styles["parallax-bg--2nd"]}`}>
        <p className={styles["parallax-text"]}>parallax2つ目の背景画像</p>
      </div>
      <div ref={(element) => { contentsRef.current[1] = element; }} className={styles["parallax-contents"]}>
        <p>2つ目</p>
      </div>

      <div className={`${styles["parallax-bg"]} ${styles["parallax-bg--3rd"]}`}>
        <p className={styles["parallax-text"]}>parallax3つ目の背景画像</p>
      </div>
      <div ref={(element) => { contentsRef.current[2] = element; }} className={styles["parallax-contents"]}>
        <p>3つ目</p>
      </div>

      <div className={`${styles["parallax-bg"]} ${styles["parallax-bg--4th"]}`}>
        <p className={styles["parallax-text"]}>parallax4つ目の背景画像</p>
      </div>
      <div ref={(element) => { contentsRef.current[3] = element; }} className={styles["parallax-contents"]}>
        <p>4つ目</p>
      </div>

      <div className={`${styles["parallax-bg"]} ${styles["parallax-bg--5th"]}`}>
       <p className={styles["parallax-text"]}>parallax5つ目の背景画像</p>
      </div>
      <div ref={(element) => { contentsRef.current[4] = element; }} className={`${styles["parallax-contents"]} ${styles['parallax-contents--bg-white']}`}>
        <p>5つ目</p>
      </div>

    </div>
  )
}