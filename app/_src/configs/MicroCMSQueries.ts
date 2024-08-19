import { MicroCMSQueryBasicType } from "@/_libs/types/MicroCMSQueries.types";
import { PageMap } from "./siteInfo";

export const BlogQuery: MicroCMSQueryBasicType = {
  endpointId: "blog",
  postsPerPage: 10,
  slug: PageMap["blog"].slug,
  order: '-publishedAt'
}

export const CategoryQuery: MicroCMSQueryBasicType = {
  endpointId: "blog_categories",
  postsPerPage: 100,
  slug: "",
  order: ""
}