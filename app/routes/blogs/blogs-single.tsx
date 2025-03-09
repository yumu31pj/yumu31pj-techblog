import type { Route } from ".react-router/types/app/+types/root";
import BlogSingleContent from "~/src/components/features/BlogSingleContent/BlogSingleContent";
import SectionWrapper from "~/src/components/layouts/SectionWrapper/SectionWrapper";
import type { BlogContentType } from "~/src/types/ApiTypes";
import getPaginationContents from "~/src/utils/microcms/getPaginationContents";
import ssf_getContentByID from "~/src/utils/microcms/ssf_getContentsByID";

type LoaderDataType = {
  content: BlogContentType;
  prevContent?: { id: string; title: string };
  nextContent?: { id: string; title: string };
};

/**
 * 
 * @param param0 : paramsはURLパラメータの動的部分 (このページでは/blogs/xxxのxxxx部分)
 * @returns 
 */
export const loader = async ({
  params,
}: Route.LoaderArgs): Promise<LoaderDataType> => {
  const endpoint = "blog";
  const auth = {
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  };
  const contentId = params.id || "";

  // 投稿コンテンツを取得
  const response: BlogContentType = await ssf_getContentByID(
    endpoint,
    auth,
    contentId
  );

  // ページネーション用の次と前のコンテンツIDとタイトルを取得
  const { prevContent, nextContent } = await getPaginationContents(
    contentId,
    endpoint,
    auth
  );
  
  return { content: response, prevContent, nextContent };
};

type Props = {
  loaderData: LoaderDataType;
};

const BlogsSingle = ({ loaderData }: Props) => {
  if (!loaderData) {
    return (
      <SectionWrapper>
        <p>現在準備中です。</p>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      <BlogSingleContent
        post={loaderData.content}
        prevContent={loaderData.prevContent}
        nextContent={loaderData.nextContent}
        archiveInfo={{
          linkText: "ブログ一覧へ",
          linkTo: "/blogs/"
        }}
      />
    </SectionWrapper>
  );
};

export default BlogsSingle;