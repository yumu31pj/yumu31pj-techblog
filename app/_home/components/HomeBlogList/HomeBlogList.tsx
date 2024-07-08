import Loader from "@/_libs/components/atoms/images/Loader/Loader";
import useFetchContens from "@/_libs/hooks/microCMS/useFetchContens.hooks";
import parse from 'html-react-parser';
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
                  <time>{item.publishedAt}</time>
                  <div className={styles['article__content']}>{parse(item.content)}</div>
                  {item.categories ? (
                    item.categories.map((category: string, key: number) => (
                      <div key={key} className={styles['article__category']}>{category}</div>
                    ))
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