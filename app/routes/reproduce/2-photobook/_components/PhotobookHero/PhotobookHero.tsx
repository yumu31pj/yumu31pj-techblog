import styles from "./PhotobookHero.module.scss";

export const PhotobookHero = () => {
  return (
    <div className={styles['c-hero']}>
      <picture>
        <source srcSet="/images/reproduce/2-photobook/mv_sp.webp" type="image/webp" media="(max-width: 420px)" />
        <source srcSet="/images/reproduce/2-photobook/mv_pc.webp" type="image/webp" media="(min-width: 421px)" />
        <source srcSet="/images/reproduce/2-photobook/mv_pc.png" type="image/png" media="(min-width: 421px)" />
        <img src="/images/reproduce/2-photobook/mv_sp.png" alt="Photobookのメインイメージ" width="355" height="142" />
      </picture>
    </div>
  )
}