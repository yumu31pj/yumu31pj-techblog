export type SiteMapItemType = {
  title: string;
  slug: string;
}

export type SiteMapType = {
  [key: string]: SiteMapItemType;
};