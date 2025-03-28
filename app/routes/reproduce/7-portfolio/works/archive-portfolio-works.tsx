import { PortfolioSectionContainer } from "../_components/common/PortfolioSectionContainer/PortfolioSectionContainer";
import { PortfolioSectionTitle } from "../_components/common/PortfolioSectionTitle/PortfolioSectionTitle";
import { PortfolioWorksBox, type PortfolioWorksBoxProps } from "../_components/common/PortfolioWorksBox/PortfolioWorksBox";
import { PortfolioArchiveWorksContexts } from "../_contexts/portfolio-works.contexts";
import styles from "./archive-portfolio-works.module.scss";

const ArchivePortfolioWorks = () => {
  const worksItems:PortfolioWorksBoxProps[] = PortfolioArchiveWorksContexts;

  // 画像書き出し、コンポーネント作成、流し込み、CSS: 0.75h
  // 20250328
  
  return (
    <PortfolioSectionContainer id="news" marginTop={"40-0"}>
      <PortfolioSectionTitle title="News" />
      <div className={styles["c-news-container"]}>
        {worksItems.map((item:PortfolioWorksBoxProps, key: number) => (
          <div className={styles["c-workbox-container"]} key={key}>
            <PortfolioWorksBox
              title={item.title}
              imageItem={item.imageItem}
              overview={item.overview}
            />
          </div>
        ))}
      </div>
    </PortfolioSectionContainer>
  )
}

export default ArchivePortfolioWorks;