
import { MicroCMSQueryBasicType } from "@/types/MicroCMSQueries.types";
import { PageMap } from "./siteInfo";

export const BlogQuery: MicroCMSQueryBasicType = {
  endpointId: "blog",
  postsPerPage: 10,
  slug: PageMap["blog"].slug,
  singlePath: PageMap["blog"].slug + "post/?id=",
  order: '-publishedAt'
}

export const CategoryQuery: MicroCMSQueryBasicType = {
  endpointId: "blog_categories",
  postsPerPage: 100,
  slug: "",
  singlePath: "",
  order: ""
}

export const NewsQuery: MicroCMSQueryBasicType = {
  endpointId: "news",
  postsPerPage: 10,
  slug: PageMap["news"].slug,
  singlePath: PageMap["news"].slug + "post/?id=",
  order: ""
}

export const NewsLatestQuery: MicroCMSQueryBasicType = {
  endpointId: "news",
  postsPerPage: 3,
  slug: PageMap["news"].slug,
  singlePath: PageMap["news"].slug + "post/?id=",
  order: ""
}

export const QueryForSitemap = {
  endpoints: [BlogQuery, NewsQuery]
}
