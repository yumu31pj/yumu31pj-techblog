import styles from "./ArticleSimpleItem.module.scss";
import { ArticleSimpleItemType } from "./ArticleSimpleItem.types";

const ArticleSimpleItem = (props: ArticleSimpleItemType) => {
  const {title, linkTo, date} = props;
  return (
    <a className={styles['article']} href={linkTo}>
      <div className={styles['article__date']}>{date}</div>
      <p className={styles['article__title']}>{title}</p>
    </a>
  )
}

export default ArticleSimpleItem;