import type { LinkItemType, PictureType } from "~/src/types/PartsProps.types";

export type CorporateHeroContextType = {
  imageItem: PictureType;
}

export type CorporateNewsItemType = {
  title: string;
  date: string;
  linkTo: string;
  categoryItem: {
    categoryName: string;
    categorySlug?: string;
  }
}

export type NewsSectionContextsType = {
  titleItem: CorporateSectionTitleProps,
  newsItems: CorporateNewsItemType[]
}

export type CorporateSectionWrapperType = {
  id?: string;
  children: React.ReactNode;
  isFullWidth?: boolean;
}

export type CorporateImageLinkType = PictureType & {
  linkItem: LinkItemType;
}

export type CorporateHomeSectionBusinessType = {
  id?: string;
  titleItem: CorporateSectionTitleProps;
  imageLinkItems: CorporateImageLinkType[];
}

export type CorporateProfileType = {
  term: string;
  detail: string;
}

export type CorporateHomeSectionCompanyType = {
  id?: string
  imageItems: PictureType;
  titleItem: CorporateSectionTitleProps
  profileItems: CorporateProfileType[]
}

export type CorporateHomeSectionAboutType = {
  imageItem: PictureType
  titleItem: CorporateSectionTitleProps
  paragraph: string;
}