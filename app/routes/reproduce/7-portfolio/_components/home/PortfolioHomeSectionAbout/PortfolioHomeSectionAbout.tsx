import parse from "html-react-parser";
import { PortfolioSectionContainer } from "../../common/PortfolioSectionContainer/PortfolioSectionContainer";
import { PortfolioSectionTitle } from "../../common/PortfolioSectionTitle/PortfolioSectionTitle";
import styles from "./PortfolioHomeSectionAbout.module.scss";

export type PortfolioHomeSectionAboutProps = {
  profileItem: {
    name: string;
    contactInfo: {
      address: string;
      tel: string;
      url: string;
      mail: string;
    };
    profile: string;
  }
}

export const PortfolioHomeSectionAbout = (props: PortfolioHomeSectionAboutProps) => {
  const { profileItem } = props;

  return (
    <PortfolioSectionContainer id={"about"} marginTop={"80-80"}>
      <PortfolioSectionTitle title={"About"} />
      <div className={styles['c-about-content']}>
        <div className={styles['c-about-content__name']}>{profileItem.name}</div>
        <div className={styles['c-about-content__contact']}>
          {profileItem.contactInfo.address && <div>{profileItem.contactInfo.address}</div>}
          {profileItem.contactInfo.tel && <div>tel: <a href={`tel: ${profileItem.contactInfo.tel}`}>{profileItem.contactInfo.tel}</a></div>}
          {profileItem.contactInfo.url && <div>url: <a href={profileItem.contactInfo.url}>{profileItem.contactInfo.url}</a></div>}
          {profileItem.contactInfo.mail && <div>mail: <a href={`mailto: ${profileItem.contactInfo.mail}`}>{profileItem.contactInfo.mail}</a></div>}
        </div>
        <p className={styles['c-about-content__profile']}>{parse(profileItem.profile)}</p>
      </div>
    </PortfolioSectionContainer>
  )
}