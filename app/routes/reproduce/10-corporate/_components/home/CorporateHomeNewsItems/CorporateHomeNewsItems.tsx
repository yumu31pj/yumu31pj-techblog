import type { CorporateNewsItemType } from "../../../types/CorporateType"
import { CorporateNewsItem } from "../../common/CorporateNewsItem/CorporateNewsItem"
import styles from "./CorporateHomeNewsItems.module.scss"

export const CorporateHomeNewsItems = ({newsItems}: {newsItems:  CorporateNewsItemType[]}) => {
  return (
    <ul className={styles["c-home-news"]}>
      {newsItems.map((newsItem, key) => (
        <li key={key}>
          <CorporateNewsItem {...newsItem} />
        </li>
      ))}
    </ul>
  )
}