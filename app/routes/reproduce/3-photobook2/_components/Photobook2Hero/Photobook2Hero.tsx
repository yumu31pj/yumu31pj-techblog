import styles from "./Photobook2Hero.module.scss";

export const Photobook2Hero = () => {
  return (
    <div className={styles['c-hero']}>
      <picture>
        <source srcSet="/images/reproduce/3-photobook2/mv_sp.webp" type="images/webp" media="(max-width: 320px)" />
        <source srcSet="/images/reproduce/3-photobook2/mv_pc.webp" type="images/webp" media="(min-width: 321px)" />
        <source srcSet="/images/reproduce/3-photobook2/mv_pc.png" type="images/png" media="(min-width: 321px)" />
        <img src="/images/reproduce/3-photobook2/mv_sp.png" alt="メインビジュアル画像" width="375" height="150" />
      </picture>
    </div>
  )
}