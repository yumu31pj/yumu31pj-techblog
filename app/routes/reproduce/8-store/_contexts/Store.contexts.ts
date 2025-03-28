import type { PictureProps } from "~/src/types/PartsProps.types";
import type { StoreCardSectionProps } from "../_components/StoreCardSection/StoreCardSection";
import type { StoreLinkCardProps } from "../_components/StoreLinkCard/StoreLinkCard";

export const StoreHeroContexts: PictureProps = {
  pictureItem: {
    srcSP: "/images/reproduce/8-store/mv_sp.png",
    srcSPWebp: "/images/reproduce/8-store/mv_sp.webp",
    srcPC: "/images/reproduce/8-store/mv_pc.png",
    srcPCWebp: "/images/reproduce/8-store/mv_pc.png",
    altText: "Storeのメイン画像",
    breakpoint: 896
  }
}

export const StoreCatalogContexts: StoreCardSectionProps = {
  contentItem: {
    title: "Catalog",
    content: `
      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    `,
    imageItem: {
      pictureItem: {
        srcSP: "/images/reproduce/8-store/catalog_2_sp.png",
        srcSPWebp: "/images/reproduce/8-store/catalog_2_sp.webp",
        srcPC: "/images/reproduce/8-store/catalog_1_pc.png",
        srcPCWebp: "/images/reproduce/8-store/catalog_1_pc.webp",
        altText: "Catalogのメイン画像",
        widthSP: 337,
        heightSP: 337,
        breakpoint: 896,
        isLazy: true,
      }
    },
    direction: "normal"
  },
}

export const StoreAntiqueContexts: StoreCardSectionProps = {
  contentItem: {
    title: "Antique",
    content: `
      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    `,
    imageItem: {
      pictureItem: {
        srcSP: "/images/reproduce/8-store/antique_1_pc.png",
        srcSPWebp: "/images/reproduce/8-store/antique_1_sp.webp",
        srcPC: "/images/reproduce/8-store/antique_1_pc.png",
        srcPCWebp: "/images/reproduce/8-store/antique_1_pc.webp",
        altText: "Catalogのメイン画像",
        widthSP: 337,
        heightSP: 337,
        breakpoint: 896,
        isLazy: true
      }
    },
    direction: "reverse",
    buttonItem: {
      title: "Read More",
      linkTo: "#"
    }
  },
}

export const StoreCardArchiveContexts: StoreLinkCardProps = {
  cardItem: {
    title: "Archive",
    overview: "テキストテキストテキストテキスト<br>テキストテキストテキスト",
    imageItem: {
      pictureItem: {
        srcSP: "/images/reproduce/8-store/home_1_sp.png",
        srcSPWebp: "/images/reproduce/8-store/home_1_sp.webp",
        srcPC: "/images/reproduce/8-store/home_1_pc.png",
        srcPCWebp: "/images/reproduce/8-store/home_1_pc.webp",
        altText: "Catalogのメイン画像",
        widthSP: 337,
        heightSP: 337,
        breakpoint: 896
      }
    },
    linkTo: "#"
  }
}

export const StoreCardNewContexts: StoreLinkCardProps = {
  cardItem: {
    title: "New",
    overview: "テキストテキストテキストテキスト<br>テキストテキストテキスト",
    imageItem: {
      pictureItem: {
        srcSP: "/images/reproduce/8-store/home_2_sp.png",
        srcSPWebp: "/images/reproduce/8-store/home_2_sp.webp",
        srcPC: "/images/reproduce/8-store/home_2_pc.png",
        srcPCWebp: "/images/reproduce/8-store/home_2_pc.webp",
        altText: "Newのメイン画像",
        widthSP: 337,
        heightSP: 337,
        breakpoint: 896
      }
    },
    linkTo: "#"
  }
}