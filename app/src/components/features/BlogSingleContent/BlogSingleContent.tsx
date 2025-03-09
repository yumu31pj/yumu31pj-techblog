import parse from "html-react-parser";
import PaginationSingle from "~/src/components/features/PaginationSingle/PaginationSingle";
import ButtonWrapper from "~/src/components/layouts/ButtonWrapper/ButtonWrapper";
import DivContentsWrapper from "~/src/components/layouts/DivContentsWrapper/DivContentsWrapper";
import { LinkButton } from "~/src/components/parts/buttons/LinkButton/LinkiButton";
import SimpleTitle from "~/src/components/parts/titles/SimpleTitle/SimpleTitle";
import type { BlogCategoryType, BlogContentType } from "~/src/types/ApiTypes";
import { getFormatedDateString } from "~/src/utils/getFormatedDateString";
import styles from "./BlogSingleContent.module.scss";

export type BlogSingleContentProps = {
  post: BlogContentType;
  prevContent?: { id: string; title: string };
  nextContent?: { id: string; title: string };
  archiveInfo: {
    linkText: string;
    linkTo: string;
  }
}

const BlogSingleContent = (props: BlogSingleContentProps) => {
  const {post, prevContent, nextContent, archiveInfo} = props;

  return (
    <div className={styles['single']}>
      <DivContentsWrapper>
        <SimpleTitle tag="h2" text={post.title} />
        {post.categories && (
          <ul className={styles['single-category']}>
            {post.categories.map((category: BlogCategoryType, key: number) => (
              <li key={key}><a href={`/blogs/category/${category.id}`}>{category.name}</a></li>
            ))}
          </ul>
        )}
        <time className={styles['single-date']}>{getFormatedDateString(post.updatedAt)}</time>
        <div className={styles['single-content']}>{parse(post.content)}</div>
      </DivContentsWrapper>
      <DivContentsWrapper>
        <PaginationSingle
          path="/blogs"
          prev={prevContent}
          next={nextContent}
        />
        <ButtonWrapper marginTop="m">
          <LinkButton
            linkText={archiveInfo.linkText}
            linkTo={archiveInfo.linkTo}
            type={"flip"}
          />
        </ButtonWrapper>
      </DivContentsWrapper>
    </div>
  )
}

export default BlogSingleContent;