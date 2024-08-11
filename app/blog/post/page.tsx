'use client';
import useFetchContentDetail from "@/app/_libs/hooks/microCMS/useFetchContentDetail.hooks";
import styles from "./page.module.scss";

import { Category } from "@/app/_common/types/microCMS/Category.types";
import Loader from "@/app/_libs/components/atoms/images/Loader/Loader";
import { getFormatedDateString } from "@/app/_libs/utils/getFormatedDateString";
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
              {response.categories.map((item:Category, key:number) => (
                <li key={key}>{item.name}</li>
              ))}
            </ul>
          ) : null}
          <span className={styles['published']}>{getFormatedDateString(response.publishedAt)}</span>
          <div className={styles['content-body']}>{parse(response.content)}</div>
          <a href="/" className={styles['back-to-top']}>トップに戻る</a>
        </section>
      ) : null}
    </div>
  );
}

export default BlogPostDetail;
