'use client';

import SearchQueryChecker from "_project/components/SearchQueryChecker";
import HomeBlogList from "./_home/components/HomeBlogList/HomeBlogList";
import HomeLatestNews from "./_home/components/HomeLatestNews/HomeLatestNews";

const Home = () => {

  return (
    <>
      <HomeLatestNews />
      <HomeBlogList />
      <SearchQueryChecker />
    </>
  )
}

export default Home;