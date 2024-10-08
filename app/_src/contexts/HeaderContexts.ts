import { SiteInfo } from "../configs/siteInfo"

SiteInfo
export const HeaderContexts = {
  logoImageItem: {
    srcSP: SiteInfo.logoImage.png,
    srcWebpSP: SiteInfo.logoImage.webp,
    altText: SiteInfo.siteTitle,
    widthSP: SiteInfo.logoImage.width,
    heightSP: SiteInfo.logoImage.height,
    breakpointPC: 1024
  },
  // topLinkUrl: SiteInfo.siteUrl
  topLinkUrl: "/",
}