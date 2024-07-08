'use client';
import styles from "./page.module.scss";

import Loader from "@/_libs/components/atoms/images/Loader/Loader";
import useFetchContentDetail from "@/_libs/hooks/useFetchContentDetail.hooks";
import parse from "html-react-parser";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const BlogPostDetail = () => {
  const searchParams = useSearchParams();
  const contentId = searchParams.get("id") || "";
  const draftKey = searchParams.get("draftKey") || '';
  const endpointId = "blog";

  const {isLoading, response, hasError, errorMessage} = useFetchContentDetail(contentId, endpointId);

  if (isLoading) {
    return (
        <Loader />
    );
  };

  return (
    <>
      <Suspense>
        <div className={styles['aritcle-wrapper']}>
          {response ? (
            <section className={styles['article']}>
              <h2>{response.title}</h2>
              <time className={styles['published']}>{response.publishedAt}</time>
              <div className={styles['content-body']}>{parse(response.content)}</div>
              <a href="/" className={styles['back-to-top']}>トップに戻る</a>
            </section>
          ) : null}
        </div>
      </Suspense>
    </>
  )
}

export default BlogPostDetail