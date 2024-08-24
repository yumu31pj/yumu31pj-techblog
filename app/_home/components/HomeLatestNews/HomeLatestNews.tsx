import Loader from "@/_libs/components/atoms/images/Loader/Loader";
import SimpleTitleH2 from "@/_libs/components/atoms/titles/SimpleTitle/SimpleTitleH2/SimpleTitleH2";
import SectionWrapper from "@/_libs/components/layouts/wrappers/SectionWrapper/SectionWrapper";
import useFetchContens from "@/_libs/hooks/microCMS/useFetchCategoryList.hooks";
import ArticleSimpleList from "@/_src/components/organisms/articleItems/ArticleSimpleList/ArticleSimpleList";
import { MicroCMSAuth } from "@/_src/configs/microCMSApi";
import { NewsLatestQuery } from "@/_src/configs/MicroCMSQueries";
import { Suspense } from "react";
import styles from "./HomeLatestNews.module.scss";

const HomeLatestNews = () => {

  const {isLoading, response, hasError, errorMessage} = useFetchContens(MicroCMSAuth, NewsLatestQuery);

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
    <SectionWrapper id="homeLatestNews">
      <div className={styles['latest-news-title']}>
        <SimpleTitleH2 title="Latest News" />
      </div>
      <Suspense>
        <div className={styles['home-latest-news']}>
          <ArticleSimpleList
            articles={response.contents}
          />
        </div>
      </Suspense>
    </SectionWrapper>
  )
}

export default HomeLatestNews;