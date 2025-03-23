import MainContainer from "~/src/components/layouts/MainContainer/MainContainer";
import { HomeIntroduction } from "~/src/components/pages/home/HomeIntroduction/HomeIntroduction";
import HomeLatestBlogs from "~/src/components/pages/home/HomeLatestBlogs/HomeLatestBlogs";
import HomeLatestShowcase from "~/src/components/pages/home/HomeLatestShowcase/HomeLatestShowcase";
import { SiteInfo } from "~/src/configs/SiteInfo";
import getAllContentIds from "~/src/utils/microcms/getAllContentIds";
import getShowcaseContents from "~/src/utils/microcms/getShowcaseContents";
import ssf_getBlogContents from "~/src/utils/microcms/ssf_getBlogContents";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: SiteInfo.siteTitle },
    { name: "description", content: SiteInfo.description },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  // 最新のブログ
  // 投稿データ取得条件
  const endpoint = "blog";
  const perPage = 6;

  const auth = {
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  };
  const apiResponse = await ssf_getBlogContents(endpoint, auth, perPage);

  // ページネーション用に全てのコンテンツIDを取得
  const ids = await getAllContentIds(endpoint, auth);

  // 最新のコンポーネント紹介
  // showcase投稿データ取得条件
  const endpoint_showcase = "showcase";
  const perPage_showcase = 6;

  const auth_showcase = {
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN_SHOWCASE || "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY_SHOWCASE || "",
  };

  const apiResponseShowcase = await getShowcaseContents(endpoint_showcase, auth_showcase, perPage_showcase);

  return {
    apiResponse: {
      contents: apiResponse.contents,
    },
    apiResponseShowcase: {
      contents: apiResponseShowcase.contents,
    },
  };
}

const Home = ({loaderData,}: Route.ComponentProps) => {

  return (
    <MainContainer>
      <HomeIntroduction />
      <HomeLatestBlogs posts={loaderData.apiResponse.contents} />
      
      <HomeLatestShowcase posts={loaderData.apiResponseShowcase.contents} />
    </MainContainer>
  )
}

export default Home;