import type { Route } from ".react-router/types/app/+types/root";
import parse from "html-react-parser";
import PaginationDetail from "~/src/components/features/PaginationDetail/PaginationDetail";
import ButtonWrapper from "~/src/components/layouts/ButtonWrapper/ButtonWrapper";
import DivContentsWrapper from "~/src/components/layouts/DivContentsWrapper/DivContentsWrapper";
import SectionWrapper from "~/src/components/layouts/SectionWrapper/SectionWrapper";
import { LinkButton } from "~/src/components/parts/buttons/LinkButton/LinkiButton";
import SimpleTitle from "~/src/components/parts/titles/SimpleTitle/SimpleTitle";
import type { BlogContentType } from "~/src/types/ApiTypes";
import { getFormatedDateString } from "~/src/utils/getFormatedDateString";
import getAllContentIds from "~/src/utils/microcms/getAllContentIds";
import ssf_getContentByID from "~/src/utils/microcms/ssf_getContentsByID";

type LoaderDataType = {
  content: BlogContentType;
  blogIds: string[];
  prevContent?: { id: string; title: string };
  nextContent?: { id: string; title: string };
};

export const loader = async ({
  params,
}: Route.LoaderArgs): Promise<LoaderDataType> => {
  const endpoint = "blog";
  const auth = {
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  };
  const contentId = params.id || "";

  const response: BlogContentType = await ssf_getContentByID(
    endpoint,
    auth,
    contentId
  );
  const blogIds: string[] = await getAllContentIds(endpoint, auth);

  const currentIndex = blogIds.indexOf(contentId);
  const prevId =
    currentIndex > 0 ? blogIds[currentIndex - 1] : null;
  const nextId =
    currentIndex < blogIds.length - 1
      ? blogIds[currentIndex + 1]
      : null;

  let prevContent = undefined;
  let nextContent = undefined;

  if (prevId) {
    const prevResponse: BlogContentType = await ssf_getContentByID(
      endpoint,
      auth,
      prevId
    );
    prevContent = { id: prevId, title: prevResponse.title };
  }

  if (nextId) {
    const nextResponse: BlogContentType = await ssf_getContentByID(
      endpoint,
      auth,
      nextId
    );
    nextContent = { id: nextId, title: nextResponse.title };
  }

  return { content: response, blogIds, prevContent, nextContent };
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
      <DivContentsWrapper>
        <SimpleTitle tag="h2" text={loaderData.content.title} />
        <time>{getFormatedDateString(loaderData.content.updatedAt)}</time>
        <div>{parse(loaderData.content.content)}</div>
      </DivContentsWrapper>
      <DivContentsWrapper>
        <PaginationDetail
          path="/blogs"
          prev={loaderData.prevContent}
          next={loaderData.nextContent}
        />
        <ButtonWrapper marginTop="m">
          <LinkButton
            linkText={"ブログ一覧へ"}
            linkTo={"/blogs/"}
            type={"flip"}
          />
        </ButtonWrapper>
      </DivContentsWrapper>
    </SectionWrapper>
  );
};

export default BlogsSingle;