import type { BlogCategoryType, BlogContentsType, BlogContentType } from "~/src/types/ApiTypes";
import { getFormatedDateString } from "~/src/utils/getFormatedDateString";
import removeHtmlTags from "~/src/utils/removeHtmlTags";
import styles from "./BlogArchiveCards.module.scss";

const BlogArchiveCards = (props: BlogContentsType) => {
  const {posts} = props;

  return (
    <div className={styles['archives']}>
      {posts.map((post: BlogContentType, key: number) => (
        <div className={styles['archives-entry']} key={key}>
          <a href={`/blogs/${post.id}`}>
            <h3>{post.title}</h3>
            <time>{getFormatedDateString(post.updatedAt)}</time>
            {/* 一覧ページではcontent内のhtmlタグを取り除いてパースする */}
            <p>{removeHtmlTags(post.content)}</p>
          </a>
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
        </div>
      ))}
    </div>
  )
}

export default BlogArchiveCards;