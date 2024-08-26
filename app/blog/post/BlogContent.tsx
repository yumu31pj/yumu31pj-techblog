'use client';

import Loader from "@/_libs/components/atoms/images/Loader/Loader";
import LabelLink from "@/_libs/components/atoms/links/LabelLink/LabelLink";
import SimpleTitleH2 from "@/_libs/components/atoms/titles/SimpleTitle/SimpleTitleH2/SimpleTitleH2";
import getMokuji from "@/_libs/components/molecules/Mokuji/getMokuji";
import Mokuji from "@/_libs/components/molecules/Mokuji/Mokuji";
import { MokujiListType } from "@/_libs/components/molecules/Mokuji/Mokuji.types";
import useFetchContentDetail from "@/_libs/hooks/microCMS/useFetchContentDetail.hooks";
import { getFormatedDateString } from "@/_libs/utils/getFormatedDateString";
import PageFlip from "@/_src/components/molecules/PageFlip/PageFlip";
import { MicroCMSAuth } from "@/_src/configs/microCMSApi";
import { SiteInfo } from "@/_src/configs/siteInfo";
import { Category } from "@/_src/types/microCMS/Category.types";
import parse from "html-react-parser";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import styles from './page.module.scss';

const BlogContent = () => {
  const searchParams = useSearchParams();
  const contentId = searchParams.get("id") || "";
  const endpointId = "blog";

  if (!contentId) {
    redirect('/blog/');
  }

  const {isLoading, response, hasError, errorMessage} = useFetchContentDetail(MicroCMSAuth, contentId, endpointId);
  const [mokujiList, setMokujiList] = useState<MokujiListType>();

  useEffect(() => {
    if (response) {
      document.title = response.title + " | " + SiteInfo.siteTitle;
      document.querySelector('meta[name="description"]')?.setAttribute("content", response.title + " | " + SiteInfo.siteTitle);
      const mokuji = getMokuji(response.content);
      if (mokuji.mokujiList.length > 0) {
        setMokujiList(mokuji);
      } else {
        setMokujiList({mokujiList: []})
      }
    }
  }, [response, searchParams, contentId])

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
    <Suspense>
      <div className={styles['aritcle-wrapper']}>
        {response ? (
          <section className={`p-microcms-single ${styles['article']}`}>
            <SimpleTitleH2 title={response.title} />
            {response.categories ? (
              <ul className={styles['article__categories']}>
                {response.categories.map((item:Category, key:number) => (
                  <li key={key}>
                    <LabelLink 
                      linkText={item.name}
                      linkTo={`/blog/?cat=${item.slug}`}
                    />
                  </li>
                ))}
              </ul>
            ) : null}

            <span className={styles['published']}>{getFormatedDateString(response.publishedAt)}</span>

            {mokujiList && mokujiList.mokujiList && mokujiList.mokujiList.length > 0 && 
              <div>
                <Mokuji mokujiList={mokujiList.mokujiList} />
              </div>
            }
            
            <div className={`p-microcms-single__body ${styles['content-body']}`}>{parse(response.content)}</div>
          </section>
        ) : null}

        <PageFlip
          microCMSAuth={MicroCMSAuth}
          endpointId={endpointId}
          contentId={contentId}
        />
      </div>
      
    </Suspense>
  );
}

export default BlogContent;
