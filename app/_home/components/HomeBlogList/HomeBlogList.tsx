import Loader from "@/components/atoms/images/Loader/Loader";
import LabelLink from "@/components/atoms/links/LabelLink/LabelLink";
import SimpleTitleH2 from "@/components/atoms/titles/SimpleTitle/SimpleTitleH2/SimpleTitleH2";
import SectionWrapper from "@/components/layouts/wrappers/SectionWrapper/SectionWrapper";
import { FlipLinkButton } from "@/components/ui";
import useFetchContens from "@/hooks/microCMS/useFetchCategoryList.hooks";
import { getFormatedDateString } from "@/utils/getFormatedDateString";
import { MicroCMSAuth } from "app/_src/configs/microCMSApi";
import { BlogQuery } from "app/_src/configs/MicroCMSQueries";
import { PageMap } from "app/_src/configs/siteInfo";
import { Category } from "app/_src/types/microCMS/Category.types";
import { Suspense } from "react";
import styles from "./HomeBlogList.module.scss";

const HomeBlogList = () => {
  const {isLoading, response, hasError, errorMessage} = useFetchContens(MicroCMSAuth, BlogQuery);

  if (isLoading) {
    return (
      <Loader />
    )
  }
  if (hasError) {
    return (
      <p>{errorMessage}</p>
    )
  }

  return (
    <>
      <Suspense>
        {response.contents && (
          // <section className={styles['sec']}>
          <SectionWrapper id="homeBlog">
            <SimpleTitleH2 title="Blogs" />
            <div className={styles['articles']}>
              {response.contents && response.contents.map((item:any, key:number) => (
                <article key={key} className={styles['article']}>
                  <h3><a href={`/blog/post/?id=${item.id}`}>{item.title}</a></h3>
                  <span className={styles['article__date']}>{getFormatedDateString(item.publishedAt)}</span>
                  {item.categories ? (
                    <ul className={styles['article__categories']}>
                      {item.categories.map((category: Category, key: number) => (
                        <li key={key}>
                          <LabelLink
                            linkText={category.name} 
                            linkTo={`/blog/?cat=${category.slug}`}
                          />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
            <div className={styles['article__more']}>
              <FlipLinkButton
                linkText="全部のブログを見る"
                linkTo={PageMap["blog"].slug}
              />
            </div>
          </SectionWrapper>
        )}
        
      </Suspense>
    </>
  );
}

export default HomeBlogList;