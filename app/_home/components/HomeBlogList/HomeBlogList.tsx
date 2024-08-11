import { Category } from "@/app/_common/types/microCMS/Category.types";
import Loader from "@/app/_libs/components/atoms/images/Loader/Loader";
import useFetchContens from "@/app/_libs/hooks/microCMS/useFetchContens.hooks";
import { getFormatedDateString } from "@/app/_libs/utils/getFormatedDateString";
import { Suspense } from "react";
import styles from "./HomeBlogList.module.scss";

const HomeBlogList = () => {
  const endpoint = 'blog';

  const {isLoading, response, hasError, errorMessage} = useFetchContens(endpoint);

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
                        <li key={key} className={styles['article__category']}>{category.name}</li>
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