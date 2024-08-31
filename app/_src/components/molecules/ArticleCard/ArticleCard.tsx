import LabelLink from "@/components/atoms/links/LabelLink/LabelLink";
import { Category } from "app/_src/types/microCMS/Category.types";
import styles from "./ArticleCard.module.scss";
import { ArticleCardType } from "./ArticleCard.types";

const ArticleCard = (props: ArticleCardType) => {
  const { title, linkTo, date, categories} = props;
  return (
    <article className={styles['article-card']}>
      <h3 className={styles['article-card__title']}>
        <a href={linkTo}>
          {title}
        </a>
      </h3>
      <span className={styles['article-card__date']}>
        {date}
      </span>
      <ul className={styles['article-card-categories']}>
        {categories.map((category: Category, key: number) => (
          <li key={key} className={styles['article-card-categories__item']}>
            <LabelLink
              linkText={category.name} 
              linkTo={`/blog/?cat=${category.slug}`}
            />
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ArticleCard;