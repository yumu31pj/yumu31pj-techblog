import type { Route } from ".react-router/types/app/+types/root";
import BlogArchiveCards from "~/src/components/features/BlogArchiveCards/BlogArchiveCards";
import Pagination from "~/src/components/features/Pagination/Pagination";
import DivContentsWrapper from "~/src/components/layouts/DivContentsWrapper/DivContentsWrapper";
import SectionWrapper from "~/src/components/layouts/SectionWrapper/SectionWrapper";
import SimpleTitle from "~/src/components/parts/titles/SimpleTitle/SimpleTitle";
import { PageInfo, PerPage, SiteInfo } from "~/src/configs/SiteInfo";
import type { BlogCategoryType, BlogContentType } from "~/src/types/ApiTypes"; // BlogCategoryType をインポート
import getBlogCategory from "~/src/utils/microcms/getBlogCategory";
import ssf_getBlogContents from "~/src/utils/microcms/ssf_getBlogContents";

type LoaderData = {
  contents: BlogContentType[];
  totalCount: number;
  categoryInfo: BlogCategoryType | null;
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: PageInfo.blogArchive.pageTitle + " | " + SiteInfo.siteTitle },
    { name: "description", content: PageInfo.blogArchive.description },
  ];
}

// 投稿データ取得条件
const endpoint = "blog";
const perPage = PerPage;
const categoryEndpoint = "blog_categories";

export async function loader({ params }: Route.LoaderArgs): Promise<LoaderData> { // loader の戻り値を修正
  const auth = {
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  };

  const categoryId = params.category || "";

  const page = params.page ? parseInt(params.page, PerPage) : 1; // ページ番号を取得
  let offset = page - 1;

  const apiResponse = await ssf_getBlogContents(endpoint, auth, perPage, offset, categoryId);

  const categoryInfo = categoryId ? await getBlogCategory(categoryEndpoint, auth, categoryId) : null; // categoryId が存在する場合のみ getBlogCategory を呼び出す

  return {
    contents: apiResponse.contents,
    totalCount: apiResponse.totalCount,
    categoryInfo: categoryInfo,
  };
}

type Props = {
  loaderData: LoaderData;
};

const BlogsCategory = ({ loaderData }: Props) => {
  return (
    <SectionWrapper>
      <SimpleTitle text={loaderData.categoryInfo ? loaderData.categoryInfo.name + "のブログ一覧" : "ブログ一覧"} tag="h2" /> {/* categoryInfo.name を表示 */}
      {loaderData && (
        <DivContentsWrapper>
          <BlogArchiveCards posts={loaderData.contents} />
        </DivContentsWrapper>
      )}
      <DivContentsWrapper>
        <Pagination
          totalCount={loaderData.totalCount}
          postsPerPage={PerPage}
          slug={"blogs"}
        />
      </DivContentsWrapper>
    </SectionWrapper>
  );
};

export default BlogsCategory;