export type SiteMapItemType = {
  title: string;
  slug: string;
}

export type SiteMapType = {
  [key: string]: SiteMapItemType;
};

export type PageMapType = {
  [key: string]: {
    title: string;
    titleEn?: string;
    slug: string;
    isExternal?: boolean;
    isDisplayedOnHeader?: boolean;
    isDisplayedOnHamburger?: boolean;
    isDisplayedOnFooter?: boolean;
    isDisplayedOnFooterBottom?: boolean;
  };
};