import { StoreCardArchiveContexts, StoreCardNewContexts } from "../../_contexts/Store.contexts";
import { StoreDivContainer } from "../StoreDivContainer/StoreDivContainer";
import { StoreLinkCard } from "../StoreLinkCard/StoreLinkCard";
import { StoreSectionTitle } from "../StoreSectionTitle/StoreSectionTitle";
import styles from "./StoreIntroduction.module.scss";

export const StoreIntroduction = () => {
  return (
    <section id="introduction" className={styles["c-section-introduction"]}>
      <StoreDivContainer>
        <div className={styles["c-section-introduction__title"]}>
          <StoreSectionTitle title="A special, long article in a newspaper or magazine" />
        </div>
        <p className={styles["c-section-introduction__paragraph"]}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
          テキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className={styles["c-cards-container"]}>
          <div className={styles["c-cards-container__item"]}>
            <StoreLinkCard cardItem={StoreCardArchiveContexts.cardItem} />
          </div>
          <div className={styles["c-cards-container__item"]}>
            <StoreLinkCard cardItem={StoreCardNewContexts.cardItem} />
          </div>
        </div>
      </StoreDivContainer>
    </section>
  )
}