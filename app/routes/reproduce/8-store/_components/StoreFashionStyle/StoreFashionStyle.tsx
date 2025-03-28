import { StoreButton } from "../StoreButton/StoreButton";
import { StoreSectionTitle } from "../StoreSectionTitle/StoreSectionTitle";
import styles from "./StoreFashionStyle.module.scss";

export const StoreFashionStyle = () => {

  return (
    <section className={styles["l-section-fashion-style"]}>
      <div className={styles["c-fashion-style-content"]}>
        <StoreSectionTitle title="Fashion & Style" />
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
          テキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className={styles["c-fashion-style-link"]}>
          <StoreButton 
            title={"Read More"}
            linkTo={"#"}
          />
        </div>
      </div>
    </section>
  )
}