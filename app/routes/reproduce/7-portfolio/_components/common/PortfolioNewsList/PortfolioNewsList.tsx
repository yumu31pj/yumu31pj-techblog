import styles from "./PortfolioNewsList.module.scss";

export type NewsProps = {
  newsItems: {
    date: string;
    title: string;
    linkTo: string;
  }[]
}

export const PortfolioNewsList = (props: NewsProps) => {
  const { newsItems } = props;

  return (
    <ul className={styles["c-news-list"]}>
      {newsItems.map((news, key: number) => (
        <li key={key}>
          <a href={news.linkTo}>
            <span>{news.date}</span>
            <p>{news.title}</p>
          </a>
        </li>
      ))}
    </ul>
  )
}