import { HomeSectionTitle } from "../HomeSectionTitle/HomeSectionTitle";
import { SectionContainer } from "../SectionContainer/SectionContainer";
import styles from "./SectionAbout.module.scss";

export const SectionAbout = () => {
  return (
    <SectionContainer id={"about"} paddingTop={80}>
      <HomeSectionTitle text="About" />
      <div className={styles["c-home-about-section"]}>
        <div className={styles["c-home-about-section__image"]}>
          <picture>
            <source srcSet="/images/reproduce/1-profile/home/about1_sp.webp" type="image/webp" media="(max-width: 365px)" />
            <source srcSet="/images/reproduce/1-profile/home/about1_pc.webp" type="image/webp" media="(min-width: 366px)" />
            <source srcSet="/images/reproduce/1-profile/home/about1_pc.png" type="image/webp" media="(min-width: 366px)" />
            <img src="/images/reproduce/1-profile/home/about1_sp.png" width="100" height="100" alt="aboutのイメージ" loading="lazy" />
          </picture>
        </div>

        <div className={styles['c-home-about-section__profile']}>
          <h3>Place Your Name</h3>
          <p>
            テキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキスト<br />
            テキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}