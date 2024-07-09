'use client';
import useFetchContentDetail from "@/_libs/hooks/microCMS/useFetchContentDetail.hooks";
import styles from "./page.module.scss";

import Loader from "@/_libs/components/atoms/images/Loader/Loader";
import parse from "html-react-parser";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const BlogPostDetail = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BlogContent />
      </Suspense>
    </>
  )
}

const BlogContent = () => {
  const searchParams = useSearchParams();
  const contentId = searchParams.get("id") || "";
  const endpointId = "blog";

  const {isLoading, response, hasError, errorMessage} = useFetchContentDetail(contentId, endpointId);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (hasError) {
    return (
      <p>{errorMessage}</p>
    )
  }

  return (
    <div className={styles['aritcle-wrapper']}>
      {response ? (
        <section className={styles['article']}>
          <h2>{response.title}</h2>
          {response.categories ? (
            <ul>
              {response.categories.map((item:string, key:number) => (
                <li key={key}>{item}</li>
              ))}
            </ul>
          ) : null}
          <time className={styles['published']}>{response.publishedAt}</time>
          <div className={styles['content-body']}>{parse(response.content)}</div>
          <a href="/" className={styles['back-to-top']}>トップに戻る</a>
        </section>
      ) : null}
    </div>
  );
}

export default BlogPostDetail;
