import { HeaderBasicProps } from "_31pr-bootstrap/src/features/headers/header-basic/header-basic";
import { SiteInfo } from "app/_project/configs/siteInfo";

export const HeaderContexts: HeaderBasicProps = {
  headerItems: {
    logoItems: {
      srcSP: SiteInfo.logoImage.png,
      srcWebpSP: SiteInfo.logoImage.webp,
      altText: SiteInfo.siteTitle,
      width: SiteInfo.logoImage.width,
      height: SiteInfo.logoImage.height,
      breakpoint: 1024,
      isLazy: false,
      isPreload: true
    },
  }
}