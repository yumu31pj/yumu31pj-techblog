import styles from "./page-portfolio-news.module.scss";

// 流し込み、CSS: 0.16h
// 20250328

import { PortfolioNewsList } from "../_components/common/PortfolioNewsList/PortfolioNewsList";
import { PortfolioSectionContainer } from "../_components/common/PortfolioSectionContainer/PortfolioSectionContainer";
import { PortfolioSectionTitle } from "../_components/common/PortfolioSectionTitle/PortfolioSectionTitle";
import { PortofolioNewsContexts } from "../_contexts/portfolio-home.contexts";

const PagePortfolioNews = () => {
  const newsItems = PortofolioNewsContexts
  return (
    <PortfolioSectionContainer id="news" marginTop={"40-0"}>
      <PortfolioSectionTitle title="News" />
      <div className={styles["c-news-container"]}>
        <PortfolioNewsList newsItems={newsItems.newsItems}/>
      </div>
    </PortfolioSectionContainer>
  )
}

export default PagePortfolioNews;