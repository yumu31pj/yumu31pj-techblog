import type { PictureType } from "~/src/types/PartsProps.types";
import type { BrandGlobalNavigationProps } from "../_components/BrandGlobalNavigation/BrandGlobalNavigation";
import type { BrandSectionContainerProps } from "../_components/BrandSectionContainer/BrandSectionContainer";

export const BrandHeroContexts: PictureType = {
  srcSP: "/images/reproduce/6-brand/mv_sp.png",
  srcSPWebp: "/images/reproduce/6-brand/mv_sp.webp",
  srcPC: "/images/reproduce/6-brand/mv_pc.png",
  srcPCWebp: "/images/reproduce/6-brand/mv_pc.webp",
  widthSP: 339,
  heightSP: 339,
  altText: "Brandのイメージ画像",
  breakpoint: 767
}

export const BrandNavigationContexts: BrandGlobalNavigationProps = {
  navItems: [
    {title: "Concept", linkTo: "#concept"},
    {title: "Work", linkTo: "#work"},
    {title: "Contact", linkTo: 'mailto:yourmail@mail.test?subject=お問い合わせ'}
  ]
}

export const BrandConceptContexts: BrandSectionContainerProps = {
  sectionItem: {
    sectionInfo: {
      id: "concept",
      direction: "normal"
    },
    contentItem: {
      imageItem: {
        srcSP: "/images/reproduce/6-brand/concept_sp.png",
        srcPCWebp: "/images/reproduce/6-brand/concept_sp.webp",
        srcPC: "/images/reproduce/6-brand/concept_pc.png",
        srcSPWebp: "/images/reproduce/6-brand/concept_pc.webp",
        widthSP: 339,
        heightSP: 339,
        altText: "ブランドコンセプトのイメージ画像",
        breakpoint: 767
      },
      title: "私たちの考えるジュエリーとは",
      subtitle: "Concept",
      paragraph: "テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>テキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    }
  }
}


export const BrandWorkContexts: BrandSectionContainerProps = {
  sectionItem: {
    sectionInfo: {
      id: "work",
      direction: "reverse"
    },
    contentItem: {
      imageItem: {
        srcSP: "/images/reproduce/6-brand/work_sp.png",
        srcPCWebp: "/images/reproduce/6-brand/work_sp.webp",
        srcPC: "/images/reproduce/6-brand/work_pc.png",
        srcSPWebp: "/images/reproduce/6-brand/work_pc.webp",
        widthSP: 339,
        heightSP: 339,
        altText: "ブランドこだわり理由のイメージ画像",
        breakpoint: 767
      },
      title: "ハンドメイドにこだわる理由",
      subtitle: "Work",
      paragraph: "テキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>テキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    }
  }
}