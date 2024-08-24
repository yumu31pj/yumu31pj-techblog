
import Loader from "@/_libs/components/atoms/images/Loader/Loader";
import LabelLink from "@/_libs/components/atoms/links/LabelLink/LabelLink";
import useFetchContens from "@/_libs/hooks/microCMS/useFetchContens.hooks";
import { getFormatedDateString } from "@/_libs/utils/getFormatedDateString";
import { MicroCMSAuth } from "@/_src/configs/microCMSApi";
import { BlogQuery } from "@/_src/configs/MicroCMSQueries";
import { Category } from "@/_src/types/microCMS/Category.types";
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
          <section className={styles['sec']}>
            <h2>Blogs</h2>
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
          </section>
        )}
        
      </Suspense>
    </>
  );
}

export default HomeBlogList;