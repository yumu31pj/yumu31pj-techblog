import { PortfolioSectionContainer } from "../_components/common/PortfolioSectionContainer/PortfolioSectionContainer";
import { PortfolioSectionTitle } from "../_components/common/PortfolioSectionTitle/PortfolioSectionTitle";
import { PortofolioAboutContexts } from "../_contexts/portfolio-home.contexts";
import styles from "./page-portfolio-about.module.scss";

// 画像書き出し、コンポーネント作成、流し込み、CSS: 0.25h
// 20250328

const PagePortfolioAbout = () => {
  const profileItem = PortofolioAboutContexts.profileItem;
  return (
    <PortfolioSectionContainer id="about" marginTop="40-0">
      <PortfolioSectionTitle title="About" />
      <div className={styles["c-about-container"]}>
        <div className={styles["c-about-container__name"]}>{profileItem.name}</div>
        <div className={styles["c-about-container__contact"]} >
          {profileItem.contactInfo.address && <div>{profileItem.contactInfo.address}</div>}
          {profileItem.contactInfo.tel && <div>tel: <a href={`tel: ${profileItem.contactInfo.tel}`}>{profileItem.contactInfo.tel}</a></div>}
          {profileItem.contactInfo.url && <div>url: <a href={profileItem.contactInfo.url}>{profileItem.contactInfo.url}</a></div>}
          {profileItem.contactInfo.mail && <div>mail: <a href={`mailto: ${profileItem.contactInfo.mail}`}>{profileItem.contactInfo.mail}</a></div>}
        </div>
        <div className={styles["c-about-container__profile"]}>{profileItem.profile}</div>
      </div>
    </PortfolioSectionContainer>
  )
}

export default PagePortfolioAbout;