import type { Route } from ".react-router/types/app/+types/root";
import MainContainer from "~/src/components/layouts/MainContainer/MainContainer";
import SectionWrapper from "~/src/components/layouts/SectionWrapper/SectionWrapper";
import ShowCaseContents from "~/src/components/pages/showcase/ShowCaseContents/ShowCaseContents";
import SimpleTitle from "~/src/components/parts/titles/SimpleTitle/SimpleTitle";
import { PerPage, SiteInfo } from "~/src/configs/SiteInfo";
import getShowCaseContents from "~/src/utils/microcms/getShowcaseContents";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "コンポーネント紹介" + " | " + SiteInfo.siteTitle },
    { name: "description", content: "コンポーネント紹介" },
  ];
}

type LoaderData = {
  contents: [];
  totalCount: number;
}

const endpoint = "showcase";

export async function loader({ params }: Route.LoaderArgs): Promise<{ contents: [] }> {
  const auth = {
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN_SHOWCASE || "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY_SHOWCASE || "",
  };

  const page = params.page ? parseInt(params.page, PerPage) : 1;
  let offset = page - 1;

  const apiResponse = await getShowCaseContents(endpoint, auth);

  // 修正された return 文:
  if (apiResponse && apiResponse.contents) {
    return { contents: apiResponse.contents }; // contents 配列を返す
  } else {
    // apiResponse または apiResponse.contents が undefined の場合の処理
    // 空の配列を返すか、エラーをスローすることを検討してください。
    return { contents: [] };
  }
}

type Props = {
  loaderData: LoaderData;
};

const ShowcaseArchive = ({ loaderData }: Props) => {
  return (
    <MainContainer>
      <SectionWrapper>
        <SimpleTitle text="コンポーネント紹介" tag={"h2"} />
        <ShowCaseContents posts={loaderData.contents} />
        {/* {JSON.stringify(loaderData)} */}
      </SectionWrapper>
    </MainContainer>
  )
}

export default ShowcaseArchive;