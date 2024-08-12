import { MicroCMSQueryBasicType } from "@/_libs/types/MicroCMSQueries.types";
import { PageMap } from "./siteInfo";

export const BlogQuery: MicroCMSQueryBasicType = {
  endpointId: "blog",
  postsPerPage: 5,
  slug: PageMap["blog"].slug,
  order: '-publishedAt'
}