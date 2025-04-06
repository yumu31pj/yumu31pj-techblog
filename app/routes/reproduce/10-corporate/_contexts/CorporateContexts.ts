import type { CorporateNavigationType } from "../_components/common/CorporateNavigation/CorporateNavigation"
import type { CorporateHeroContextType, CorporateHomeSectionAboutType, CorporateHomeSectionBusinessType, CorporateHomeSectionCompanyType, NewsSectionContextsType } from "../types/CorporateType"

export const CorporateHeroContext: CorporateHeroContextType = {
  imageItem: {
    srcSP: "/images/reproduce/10-corporate/mainvisual.jpg",
    srcSPWebp: "/images/reproduce/10-corporate/mainvisual.webp",
    altText: "メイン画像",
    isLazy: false,
  }
}

export const CorporateNavigationContext: CorporateNavigationType = [
  {
    title: "NEWS",
    linkTo: "#news"
  },
  {
    title: "ABOUT",
    linkTo: "#about"
  },
  {
    title: "BUSINESS",
    linkTo: "#business"
  },
  {
    title: "COMPANY",
    linkTo: "#company"
  }
]

export const CorporateContactButtonContext = {
  title: "お問い合わせ",
  linkTo: "#",
  isExternal: false
}



export const NewsSectionContext: NewsSectionContextsType = {
  titleItem: {
    titleEN: "NEWS",
    titleJP: "ニュース"
  },
  newsItems: [
    {
      date: "2021.01.01",
      categoryItem: {
        categoryName: "NEWS",
      },
      title: "タイトルタイトルタイトルタイトル",
      linkTo: "#"
    },
    {
      date: "2021.01.01",
      categoryItem: {
        categoryName: "NEWS",
      },
      title: "タイトルタイトルタイトルタイトル",
      linkTo: "#"
    },
    {
      date: "2021.01.01",
      categoryItem: {
        categoryName: "NEWS",
      },
      title: "タイトルタイトルタイトルタイトル",
      linkTo: "#"
    },
  ]
}

export const CorporateHomeSectionAboutContext: CorporateHomeSectionAboutType = {
  imageItem: {
    srcSP: "/images/reproduce/10-corporate/about.jpg",
    srcSPWebp: "/images/reproduce/10-corporate/about.webp",
    altText: "私たちについてのイメージ画像",
    isLazy: true
  },
  titleItem: {
    titleEN: "ABOUT",
    titleJP: "私たちについて"
  },
  paragraph: "テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト<br>テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト<br>テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト"
}

export const CorporateHomeSectionBusinessContext: CorporateHomeSectionBusinessType = {
  titleItem: {
    titleEN: "BUSINESS",
    titleJP: "事業内容"
  },
  imageLinkItems: [
    {
      srcSP: "/images/reproduce/10-corporate/business1.jpg",
      srcSPWebp: "/images/reproduce/10-corporate/business1.webp",
      altText: "Web制作・マーケティングのイメージ画像",
      isLazy: true,
      linkItem: {
        title: "Web制作・マーケティング",
        linkTo: "#"
      }
    },
    {
      srcSP: "/images/reproduce/10-corporate/business2.jpg",
      srcSPWebp: "/images/reproduce/10-corporate/business2.webp",
      altText: "インターネットメディア事業のイメージ画像",
      isLazy: true,
      linkItem: {
        title: "インターネットメディア事業",
        linkTo: "#"
      }
    },
    {
      srcSP: "/images/reproduce/10-corporate/business3.jpg",
      srcSPWebp: "/images/reproduce/10-corporate/business3.webp",
      altText: "プロモーション企画・制作のイメージ画像",
      isLazy: true,
      linkItem: {
        title: "プロモーション企画・制作",
        linkTo: "#"
      }
    },
    {
      srcSP: "/images/reproduce/10-corporate/business4.jpg",
      srcSPWebp: "/images/reproduce/10-corporate/business4.webp",
      altText: "ソーシャル企画・運営のイメージ画像",
      isLazy: true,
      linkItem: {
        title: "ソーシャル企画・運営",
        linkTo: "#"
      }
    }
  ]
}

export const CorporateHomeSectionCompanyContext: CorporateHomeSectionCompanyType = {
  id: "company",
  titleItem: {
    titleEN: "COMPANY",
    titleJP: "会社情報"
  },
  imageItems: {
    srcSP: "/images/reproduce/10-corporate/company.jpg",
    srcSPWebp: "/images/reproduce/10-corporate/company.webp",
    altText: "会社情報のイメージ画像",
    isLazy: true,
  },
  profileItems: [
    {
      term: "会社名",
      detail: "ウェブエンターテイメントデザイン株式会社"
    },
    {
      term: "所在地",
      detail: "東京都渋谷区桜丘町99-9 West Building 3F"
    },
    {
      term: "代表",
      detail: "ＸＸＸＸＸＸ"
    },
    {
      term: "設立",
      detail: "2021年1月1日"
    },
    {
      term: "資本金",
      detail: "3,000,000円"
    },
    {
      term: "事業内容",
      detail: `
        <ul>
          <li>Web制作・マーケティング</li>
          <li>インターネットメディア事業</li>
          <li>プロモーション企画・制作</li>
          <li>ソーシャル企画・運営</li>
        </ul>
      `
    }
  ]
}