import type { Route } from ".react-router/types/app/+types/root";
import parse from "html-react-parser";
import SectionWrapper from "~/src/components/layouts/SectionWrapper/SectionWrapper";
import SimpleTitle from "~/src/components/parts/titles/SimpleTitle/SimpleTitle";
import type { BlogContentType } from "~/src/types/ApiTypes";
import ssf_getContentByID from "~/src/utils/microcms/ssf_getContentsByID";

type LoaderData = BlogContentType;

export const loader = async ({ params }: Route.LoaderArgs): Promise<BlogContentType> => {
  const endpoint = "blog";
  const auth = {
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
    apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  };
  const contentId = params.id || "";

  const response: BlogContentType = await ssf_getContentByID(endpoint, auth, contentId);

  return response;
};

type Props = {
  loaderData: LoaderData;
};

const BlogsSingle = ({ loaderData }: Props) => {
  return (
    <SectionWrapper>
      {loaderData ? (
        <>
          <SimpleTitle tag="h2" text={loaderData.title} />
          <time>{loaderData.updatedAt}</time>
          <div>{parse(loaderData.content)}</div>
        </>
      ) : (
        <p>現在準備中です。</p>
      )}
    </SectionWrapper>
  );
};

export default BlogsSingle;