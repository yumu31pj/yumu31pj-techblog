'use client';

import HomeBlogList from "./_home/components/HomeBlogList/HomeBlogList";
import HomeLatestNews from "./_home/components/HomeLatestNews/HomeLatestNews";

const Home = () => {

  return (
    <>
      <HomeLatestNews />
      <HomeBlogList />
    </>
  )
}

export default Home;