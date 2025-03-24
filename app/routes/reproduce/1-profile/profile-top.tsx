import { Footer } from "./_components/Footer/Footer";
import { Header } from "./_components/Header/Header";
import { Hero } from "./_components/Hero/Hero";
import { SectionAbout } from "./_components/SectionAbout/SectionAbout";
import { SectionBicycle } from "./_components/SectionBicycle/SectionBicycle";
import styles from "./profile-top.module.scss";

const PageProfileTope = () => {
  return (
    <div className={styles['l-profile-container']}>
      <Header />
      <Hero />
      <SectionAbout />
      <SectionBicycle />
      <Footer />
    </div>
  )
}

export default PageProfileTope;