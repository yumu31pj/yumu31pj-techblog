'use client';

import Loader from "@/components/atoms/images/Loader/Loader";
import LabelLink from "@/components/atoms/links/LabelLink/LabelLink";
import SimpleTitleH2 from "@/components/atoms/titles/SimpleTitle/SimpleTitleH2/SimpleTitleH2";
import getMokuji from "@/components/molecules/Mokuji/getMokuji";
import Mokuji from "@/components/molecules/Mokuji/Mokuji";
import { MokujiListType } from "@/components/molecules/Mokuji/Mokuji.types";
import useFetchContentDetail from "@/hooks/microCMS/useFetchContentDetail.hooks";
import { getFormatedDateString } from "@/utils/getFormatedDateString";
import getModifiedImgPathOfRichEditor from "@/utils/getModifiedImgPathOfRichEditor";
import PageFlip from "app/_src/components/molecules/PageFlip/PageFlip";
import { MicroCMSAuth } from "app/_src/configs/microCMSApi";
import { SiteInfo } from "app/_src/configs/siteInfo";
import { Category } from "app/_src/types/microCMS/Category.types";
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
  }, [response, searchParams, contentId, isLoading])

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
            
            <div className={`p-microcms-single__body ${styles['content-body']}`}>{parse(getModifiedImgPathOfRichEditor(response.content))}</div>
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
