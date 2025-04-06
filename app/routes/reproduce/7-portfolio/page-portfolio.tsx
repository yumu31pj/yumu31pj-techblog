import type { Route } from "../+types/reproduce-layout";
import { PortfolioHero } from "./_components/home/PortfolioHero/PortfolioHero";
import { PortfolioHomeContact } from "./_components/home/PortfolioHomeContact/PortfolioHomeContact";
import { PortfolioHomeSectionAbout } from "./_components/home/PortfolioHomeSectionAbout/PortfolioHomeSectionAbout";
import { PortfolioHomeSectionNews } from "./_components/home/PortfolioHomeSectionNews/PortfolioHomeSectionNews";
import { PortfolioHomeSectionWorks } from "./_components/home/PortfolioHomeSectionWorks/PortfolioHomeSectionWorks";
import { PortfolioHomeHeroContexts, PortfolioWorksContexts, PortofolioAboutContexts, PortofolioNewsContexts } from "./_contexts/portfolio-home.contexts";
import styles from "./page-portfolio.module.scss";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "7.Portfolio  - デザインカンプ模写"}
  ]
}

const PagePortfolio = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={styles["l-page-portfolio"]}>
      <PortfolioHero {...PortfolioHomeHeroContexts} />
      <PortfolioHomeSectionAbout profileItem={PortofolioAboutContexts.profileItem} />
      <PortfolioHomeSectionWorks worksItems={PortfolioWorksContexts.worksItems} />
      <PortfolioHomeSectionNews newsItems={PortofolioNewsContexts.newsItems} />
      <PortfolioHomeContact />
    </div>
  )
}

export default PagePortfolio;