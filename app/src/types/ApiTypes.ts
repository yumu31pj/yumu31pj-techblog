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

export type ShowCaseContentsType = {
  posts: ShowCaseContentType[];
}

export type ShowCaseContentType = {
  id: string;
  updatedAt: string;
  title: string;
  categories: string[];
  overview: string;
  howto: string;
  props: [{
    logicalname: string;
    physicalname: string;
    type: string;
    required: boolean;
    description: string;
    subprops?: [{
      logicalname: string;
      physicalname: string;
      type: string;
      required: boolean;
      description: string;
    }]
  }];
  image: {
    url: string;
    width: string;
    height: string;
  }
  source?: string;
}