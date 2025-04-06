import type { CorporateNewsItemType } from "../../../types/CorporateType";
import styles from "./CorporateNewsItem.module.scss";

export const CorporateNewsItem = ({title, date, linkTo, categoryItem}: CorporateNewsItemType) => {

  return (
    <div className={styles["c-news-item"]}>
      <div className={styles["c-news-item__info"]}>
        <time dateTime={date}>{date}</time>
        {categoryItem && (
          categoryItem.categorySlug ? (
            <a href={categoryItem.categorySlug && categoryItem.categorySlug} className={styles["c-news-item__category-link"]}>
              {categoryItem.categoryName}
            </a>
          ) : (
            <div className={styles['c-news-item__category']}>
              {categoryItem.categoryName}
            </div>
          )
        )}
      </div>
      <h3 className={styles["c-news-item__title"]}><a href={linkTo}>{title}</a></h3>
    </div>
  )
}