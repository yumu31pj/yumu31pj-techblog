import { PortfolioNewsList, type NewsProps } from "../../common/PortfolioNewsList/PortfolioNewsList"
import { PortfolioSectionContainer } from "../../common/PortfolioSectionContainer/PortfolioSectionContainer"
import { PortfolioSectionTitle } from "../../common/PortfolioSectionTitle/PortfolioSectionTitle"
import styles from "./PortfolioHomeSectionNews.module.scss"

export const PortfolioHomeSectionNews = (props: NewsProps) => {
  const { newsItems } = props;
  return (
    <PortfolioSectionContainer id="news" marginTop={"90-150"}>
      <PortfolioSectionTitle title={"News"} />
      <div className={styles['c-home-new-container']}>
        <PortfolioNewsList newsItems={newsItems} />
      </div>
    </PortfolioSectionContainer>
  )
}