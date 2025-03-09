import parse from "html-react-parser";
import type { ShowCaseContentsType } from "~/src/types/ApiTypes";
import { getFormatedDateString } from "~/src/utils/getFormatedDateString";
import styles from "./ShowCaseContents.module.scss";

const ShowCaseContents = (props: ShowCaseContentsType) => {
  const {posts} = props;

  return (
    <ul className={styles['components']}>
      {posts.map((post, key: number) => (
        <li key="key" className={styles['components__item']}>
          <a href={`/showcase/${post.id}`}>
            <h3 className={styles['component-name']}>{post.title}</h3>
            <time className={styles['component-updated']}>{getFormatedDateString(post.updatedAt)}</time>
            {post.categories && (
              <ul className={styles['component-categories']}>
                {post.categories.map((category: string, key: number) => (
                  <li>{category}</li>
                ))}
              </ul>
            )}
            {post.image && (
              <img src={`${post.image.url}?fm=webp`} alt="" width={post.image.width} height={post.image.height} className={styles['component-image']} />
            )}
            <p className={styles['component-overview']}>{parse(post.overview)}</p>
            {/* {parse(post.howto)} */}
            {/* <div>
              {post.props.logicalname}
              {post.props.physicalname}
              {post.props.required}
            </div> */}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ShowCaseContents;