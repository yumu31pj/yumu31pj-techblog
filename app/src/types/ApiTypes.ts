export type MicroCMSAuthType = {
  serviceDomain: string;
  apiKey: string;
}

export type BlogContentsType = {
  posts: BlogContentType[];
}

export type BlogContentType = {
  id: string;
  title: string;
  updatedAt: string;
  content: string;
  categories: BlogCategoryType[];
}

export type BlogCategoryType = {
  id: string;
  name: string;
  slug: string;
}