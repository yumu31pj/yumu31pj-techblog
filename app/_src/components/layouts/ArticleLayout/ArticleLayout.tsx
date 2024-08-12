import styles from "./ArticleLayout.module.scss";
import { ArticleLayoutType } from "./ArticleLayout.types";

/**
 * @param props 
 * @returns 
 */
const ArticleLayout = (props: ArticleLayoutType) => {
  const {firstComponent, secondComponent, isReverse} = props;
  const baseClass = 'article-layout';
  const modifierClass = isReverse ? baseClass + "--reverse" : "";

  return (
    <div className={`${styles[baseClass]}${isReverse ? null : " " + styles[modifierClass]}`}>
      <div className={styles[`${baseClass}__first`]}>{firstComponent}</div>
      <div className={styles[`${baseClass}__second`]}>{secondComponent}</div>
    </div>
  )
}

export default ArticleLayout;