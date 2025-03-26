import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles['c-hero']}>
      <picture>
        <source srcSet="/images/reproduce/1-profile/home/mv_sp.webp" type="image/webp" media="(max-width: 600px)" />
        <source srcSet="/images/reproduce/1-profile/home/mv_pc.webp" type="image/webp" media="(min-width: 601px)" />
        <source srcSet="/images/reproduce/1-profile/home/mv_pc.png" type="image/png" media="(min-width: 601px)" />
        <img src="/images/reproduce/1-profile/home/mv_sp.png" alt="profileメインイメージ" width="375" height="600" />
      </picture>
    </div>
  )
}