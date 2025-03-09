export const SiteInfo = {
  siteTitle: "yumu31pj Tech Blog",
  siteUrl: "https://blog.yumu31pj.tech/",
  description: "React, React Router, Next.js"
}

export const PerPage: number = 10;


/** **************************************************
 * PageMap
 ************************************************** */

export type PageMapType = {
  [key: string]: {
    pageTitle: string;
    path: string;
    description: string;
    isDisplayedOnFooterNavigation: boolean;
  };
};

export const PageMap = {
  "HOME": {
    pageTitle: "HOME",
    path: "/",
    description: SiteInfo.siteTitle,
    isDisplayedOnFooterNavigation: true
  },
  "blogArchive": {
    pageTitle: "ブログ一覧",
    path: "/blogs/",
    description: "ブログ一覧 | " + SiteInfo.siteTitle, 
    isDisplayedOnFooterNavigation: true
  },
}