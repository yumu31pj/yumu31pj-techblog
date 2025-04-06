import type { PictureType } from "~/src/types/PartsProps.types";
import type { NewsProps } from "../_components/common/PortfolioNewsList/PortfolioNewsList";
import type { PortfolioHomeSectionAboutProps } from "../_components/home/PortfolioHomeSectionAbout/PortfolioHomeSectionAbout";
import type { PortfolioHomeSectionWorksProps } from "../_components/home/PortfolioHomeSectionWorks/PortfolioHomeSectionWorks";

export const PortfolioHomeHeroContexts: PictureType = {
  srcSP: "/images/reproduce/7-portfolio/mv_sp.png",
  srcSPWebp: "/images/reproduce/7-portfolio/mv_sp.webp",
  srcPC: "/images/reproduce/7-portfolio/mv_pc.png",
  srcPCWebp: "/images/reproduce/7-portfolio/mv_pc.webp",
  widthSP: 375,
  heightSP: 420,
  altText: "Portfolioメイン画像",
  breakpoint: 600
}

export const PortofolioAboutContexts: PortfolioHomeSectionAboutProps = {
  profileItem: {
    name: "Xxxxx Ashley",
    contactInfo: {
      address: "2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo 106-0031 Japan",
      tel: "000-0000-0000",
      url: "www.xxxxxx.jp",
      mail: "xxx@xxxxxx.jp"
    },
    profile: "プロフィールテキストテキストテキストテキストテキストテキストテキストテキストテキストストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  }
}

export const PortfolioWorksContexts: PortfolioHomeSectionWorksProps = {
  worksItems: [
    {
      imageItem: {
        srcSP: "/images/reproduce/7-portfolio/works1_sp.png",
        srcSPWebp: "/images/reproduce/7-portfolio/works1_sp.webp",
        srcPC: "/images/reproduce/7-portfolio/works1_pc.png",
        srcPCWebp: "/images/reproduce/7-portfolio/works1_pc.webp",
        widthSP: 375,
        heightSP: 420,
        altText: "Portfolioメイン画像",
        breakpoint: 600
      },
      linkTo: "#"
    },
    {
      imageItem: {
        srcSP: "/images/reproduce/7-portfolio/works2_sp.png",
        srcSPWebp: "/images/reproduce/7-portfolio/works2_sp.webp",
        srcPC: "/images/reproduce/7-portfolio/works2_pc.png",
        srcPCWebp: "/images/reproduce/7-portfolio/works2_pc.webp",
        widthSP: 375,
        heightSP: 420,
        altText: "Portfolioメイン画像",
        breakpoint: 600
      },
      linkTo: "#"
    },
    {
      imageItem: {
        srcSP: "/images/reproduce/7-portfolio/works3_sp.png",
        srcSPWebp: "/images/reproduce/7-portfolio/works3_sp.webp",
        srcPC: "/images/reproduce/7-portfolio/works3_pc.png",
        srcPCWebp: "/images/reproduce/7-portfolio/works3_pc.webp",
        widthSP: 375,
        heightSP: 420,
        altText: "Portfolioメイン画像",
        breakpoint: 600
      },
      linkTo: "#"
    },
    {
      imageItem: {
        srcSP: "/images/reproduce/7-portfolio/works4_sp.png",
        srcSPWebp: "/images/reproduce/7-portfolio/works4_sp.webp",
        srcPC: "/images/reproduce/7-portfolio/works4_pc.png",
        srcPCWebp: "/images/reproduce/7-portfolio/works4_pc.webp",
        widthSP: 375,
        heightSP: 420,
        altText: "Portfolioメイン画像",
        breakpoint: 600
      },
      linkTo: "#"
    },
    {
      imageItem: {
        srcSP: "/images/reproduce/7-portfolio/works5_sp.png",
        srcSPWebp: "/images/reproduce/7-portfolio/works5_sp.webp",
        srcPC: "/images/reproduce/7-portfolio/works5_pc.png",
        srcPCWebp: "/images/reproduce/7-portfolio/works5_pc.webp",
        widthSP: 375,
        heightSP: 420,
        altText: "Portfolioメイン画像",
        breakpoint: 600
      },
      linkTo: "#"
    },
    {
      imageItem: {
        srcSP: "/images/reproduce/7-portfolio/works6_sp.png",
        srcSPWebp: "/images/reproduce/7-portfolio/works6_sp.webp",
        srcPC: "/images/reproduce/7-portfolio/works6_pc.png",
        srcPCWebp: "/images/reproduce/7-portfolio/works6_pc.webp",
        widthSP: 375,
        heightSP: 420,
        altText: "Portfolioメイン画像",
        breakpoint: 600
      },
      linkTo: "#"
    }
  ]
}

export const PortofolioNewsContexts: NewsProps = {
  newsItems: [
    {
      date: "2020.XX.XX",
      title: "デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。",
      linkTo: "#"
    },
    {
      date: "2020.XX.XX",
      title: "ＸＸ月ＸＸ日から写真集「ＸＸＸＸＸＸＸ」の販売を開始します。",
      linkTo: "#"
    },
    {
      date: "2019.XX.XX",
      title: "【イベント開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト",
      linkTo: "#"
    },
    {
      date: "2019.XX.XX",
      title: "デザイン雑誌「ＸＸＸＸＸＸ Vol.10』に掲載していただきました。",
      linkTo: "#"
    },
    {
      date: "2019.XX.XX",
      title: "【個展開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト",
      linkTo: "#"
    },
  ]
}