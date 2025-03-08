import type { BlogCategoryType, BlogContentsType, BlogContentType } from "~/src/types/ApiTypes";
import { getFormatedDateString } from "~/src/utils/getFormatedDateString";
import removeHtmlTags from "~/src/utils/removeHtmlTags";
import styles from "./BlogArchiveCards.module.scss";

const BlogArchiveCards = (props: BlogContentsType) => {
  const {posts} = props;

  return (
    <div className={styles['archives']}>
      {posts.map((post: BlogContentType, key: number) => (
        <a className={styles['archives-entry']} key={key} href={`/blogs/${post.id}`}>
          <h3>{post.title}</h3>
          <time>{getFormatedDateString(post.updatedAt)}</time>
          {post.categories && 
            (
              <ul className={styles['entry-categories']}>
                {post.categories.map((category: BlogCategoryType, key: number) => (
                  <li key={key}>
                    <a href={`blog/category/${category.slug}`}>{category.name}</a>
                  </li>
                ))}
              </ul>
            )
          }
          <p>{removeHtmlTags(post.content)}</p>
        </a>
      ))}
    </div>
  )
}

export default BlogArchiveCards;