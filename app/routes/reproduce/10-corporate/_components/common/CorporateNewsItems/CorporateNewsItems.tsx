import type { CorporateNewsItemType } from "../../../types/CorporateType"
import { CorporateNewsItem } from "../CorporateNewsItem/CorporateNewsItem"
import styles from "./CorporateNewsItems.module.scss"

export const CorporateNewsItems = ({newsItems}: {newsItems:  CorporateNewsItemType[]}) => {
  return (
    <ul className={styles["c-news"]}>
      {newsItems.map((newsItem, key) => (
        <li key={key}>
          <CorporateNewsItem {...newsItem} />
        </li>
      ))}
    </ul>
  )
}