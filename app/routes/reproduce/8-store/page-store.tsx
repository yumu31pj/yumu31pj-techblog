import { StoreCardSection } from "./_components/StoreCardSection/StoreCardSection";
import { StoreFashionStyle } from "./_components/StoreFashionStyle/StoreFashionStyle";
import { StoreFooter } from "./_components/StoreFooter/StoreFooter";
import { StoreHero } from "./_components/StoreHero/StoreHero";
import { StoreIntroduction } from "./_components/StoreIntroduction/StoreIntroduction";
import { StoreAntiqueContexts, StoreCatalogContexts, StoreHeroContexts } from "./_contexts/Store.contexts";
import styles from "./page-store.module.scss";

const PageStore = () => {
  return (
    <div className={styles["l-page-store"]}>
      <StoreHero imageItem={StoreHeroContexts} />
      <StoreIntroduction />
      <StoreFashionStyle />
      <div className={styles['l-page-store-card-container']}>
        <StoreCardSection contentItem={StoreCatalogContexts.contentItem} />
        <StoreCardSection contentItem={StoreAntiqueContexts.contentItem} />
      </div>
      <StoreFooter />
    </div>
  )
}

export default PageStore;