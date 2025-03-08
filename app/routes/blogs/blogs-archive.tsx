import type { Route } from ".react-router/types/app/+types/root";
import { useParams } from "react-router";
import BlogArchiveCards from "~/src/components/features/BlogArchiveCards/BlogArchiveCards";
import DivContentsWrapper from "~/src/components/layouts/DivContentsWrapper/DivContentsWrapper";
import SectionWrapper from "~/src/components/layouts/SectionWrapper/SectionWrapper";
import SimpleTitle from "~/src/components/parts/titles/SimpleTitle/SimpleTitle";
import { PageInfo, SiteInfo } from "~/src/configs/SiteInfo";
import type { BlogContentType } from "~/src/types/ApiTypes";
import ssf_getBlogContents from "~/src/utils/microcms/ssf_getBlogContents";

type LoaderData = BlogContentType[];

export function meta({}: Route.MetaArgs) {
  return [
    { title: PageInfo.blogArchive.pageTitle + " | " + SiteInfo.siteTitle },
    { name: "description", content: PageInfo.blogArchive.description },
  ];
}

// 投稿データ取得条件
const endpoint = "blog";
const perPage = 10;

export async function loader({ params }: Route.LoaderArgs): Promise<{ contents: BlogContentType[] }> {
  const auth = {
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  };

  console.log("params.page " + params.page);
  const page = params.page ? parseInt(params.page, 10) : 1; // ページ番号を取得
  let offset = page - 1;

  const apiResponse = await ssf_getBlogContents(endpoint, auth, perPage, offset);
  return apiResponse.contents;
}

type Props = {
  loaderData: BlogContentType[];
};

const BlogsArchive = ({ loaderData }: Props) => {
  const { page } = useParams();
  const pageNumber = page ? parseInt(page, 10) : 1;

  return (
    <SectionWrapper>
      <SimpleTitle text={`ブログ一覧 (ページ ${pageNumber})`} tag="h2" />
      {loaderData && (
        <DivContentsWrapper>
          <BlogArchiveCards posts={loaderData} />
        </DivContentsWrapper>
      )}
    </SectionWrapper>
  );
};

export default BlogsArchive;