import { getFormatedDateString } from "@/utils/getFormatedDateString";
import ArticleSimpleItem from "app/_src/components/molecules/articleItems/ArticleSimpleItem/ArticleSimpleItem";
import { NewsQuery } from "app/_src/configs/MicroCMSQueries";
import styles from "./ArticleSimpleList.module.scss";
import { ArticleSimpleListType } from "./ArticleSimpleList.types";

const ArticleSimpleList = (props: ArticleSimpleListType) => {
  const {articles} = props;
  
  return (
    <>
      {articles && 
        <ul className={styles["articles"]}>
          {articles.map((article: any, key: number) => (
            <li className={styles["articles__item"]} key={key}>
              <ArticleSimpleItem
                title={article.title}
                linkTo={NewsQuery.singlePath + article.id}
                date={getFormatedDateString(article.publishedAt)}
              />
            </li>
          ))}
        </ul>
      }
    </>
  )
}

export default ArticleSimpleList;