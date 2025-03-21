export const SiteInfo = {
  siteTitle: "yumu31pj Tech Blog",
  siteUrl: "https://blog.yumu31pj.tech/",
  description: "React, React Router, Next.js"
}

export const PerPage: number = 10;

export const GTMTagID = "GTM-W7CP5MKZ";


/** **************************************************
 * PageMap
 ************************************************** */

export type PageMapType = {
  [key: string]: {
    pageTitle: string;
    path: string;
    description: string;
    isDisplayedOnHamburgerNavigation: boolean;
    isDisplayedOnFooterNavigation: boolean;
    isExternal?: boolean;
  };
};

export const PageMap = {
  "HOME": {
    pageTitle: "HOME",
    path: "/",
    description: SiteInfo.siteTitle,
    isDisplayedOnHamburgerNavigation: true,
    isDisplayedOnFooterNavigation: true
  },
  "blogArchive": {
    pageTitle: "ブログ一覧",
    path: "/blogs/",
    description: "ブログ一覧 | " + SiteInfo.siteTitle, 
    isDisplayedOnHamburgerNavigation: true,
    isDisplayedOnFooterNavigation: true
  },
  "library": {
    pageTitle: "コンポーネントギャラリー",
    path: "/library/",
    description: "コンポーネントギャラリー | " + SiteInfo.siteTitle, 
    isDisplayedOnHamburgerNavigation: true,
    isDisplayedOnFooterNavigation: true
  },
  "showcase": {
    pageTitle: "コンポーネント紹介",
    path: "/showcase/",
    description: "コンポーネント紹介 | " + SiteInfo.siteTitle, 
    isDisplayedOnHamburgerNavigation: true,
    isDisplayedOnFooterNavigation: true
  },
  "parallax": {
    pageTitle: "パララックスサンプル",
    path: "/parallax/",
    description: "パララックスサンプルページ | " + SiteInfo.siteTitle, 
    isDisplayedOnHamburgerNavigation: true,
    isDisplayedOnFooterNavigation: false
  },
  "github": {
    pageTitle: "GitHub",
    path: "https://blog.yumu31pj.tech/",
    description: "yumu31pjのGitHub | " + SiteInfo.siteTitle, 
    isDisplayedOnHamburgerNavigation: false,
    isDisplayedOnFooterNavigation: true,
    isExternal: false
  }
}