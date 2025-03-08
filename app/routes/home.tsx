import SectionWrapper from "~/src/components/layouts/SectionWrapper/SectionWrapper";
import HomeLatestBlogs from "~/src/components/pages/home/HomeLatestBlogs/HomeLatestBlogs";
import SimpleTitle from "~/src/components/parts/titles/SimpleTitle/SimpleTitle";
import { SiteInfo } from "~/src/configs/SiteInfo";
import ssf_getBlogContents from "~/src/utils/microcms/ssf_getBlogContents";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: SiteInfo.siteTitle },
    { name: "description", content: SiteInfo.description },
  ];
}

// 投稿データ取得条件
const endpoint = "blog";
const perPage = 6;


export async function loader({ params }: Route.LoaderArgs) {
  const auth = {
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  };

  const apiResponse = await ssf_getBlogContents(endpoint, auth, perPage);
  return apiResponse;
}

const Home = ({loaderData,}: Route.ComponentProps) => {

  return (
    <>
      <SectionWrapper>
        <SimpleTitle text="最新のブログ" tag="h2" />
        <HomeLatestBlogs posts={loaderData.contents} />
      </SectionWrapper>
    </>
  );
}

export default Home;