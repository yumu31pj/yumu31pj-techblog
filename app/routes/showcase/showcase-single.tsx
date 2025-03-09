import type { Route } from ".react-router/types/app/+types/root";
import ShowcaseSingleContent from "~/src/components/features/ShowcaseSingleContent/ShowcaseSingleContent";
import SectionWrapper from "~/src/components/layouts/SectionWrapper/SectionWrapper";
import type { ShowCaseContentType } from "~/src/types/ApiTypes";
import getPaginationContents from "~/src/utils/microcms/getPaginationContents";
import getShowcaseContentByID from "~/src/utils/microcms/getShowcaseContentByID";

type LoaderDataType = {
  content: ShowCaseContentType;
  prevContent?: { id: string; title: string };
  nextContent?: { id: string; title: string };
};

export const loader = async ({
  params,
}: Route.LoaderArgs): Promise<LoaderDataType> => {
  const endpoint = "showcase";
  const auth = {
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN_SHOWCASE || "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY_SHOWCASE || "",
  };
  const contentId = params.id || "";
  // 投稿コンテンツを取得
  const response: ShowCaseContentType = await getShowcaseContentByID(
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

}

type Props = {
  loaderData: LoaderDataType;
};

const ShowcaseSingle = ({ loaderData }: Props) => {
  if (!loaderData) {
    return (
      <SectionWrapper>
        <p>現在準備中です。</p>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      <ShowcaseSingleContent
        post={loaderData.content}
        prevContent={loaderData.prevContent}
        nextContent={loaderData.nextContent}
        archiveInfo={{
          linkText: "コンテンツ紹介一覧へ",
          linkTo: "/showcase/"
        }}
      />
    </SectionWrapper>
  )
}

export default ShowcaseSingle;