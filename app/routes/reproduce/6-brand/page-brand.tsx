import type { Route } from "../+types/reproduce-layout";
import { BrandFooter } from "./_components/BrandFooter/BrandFooter";
import { BrandGrobalNavigation } from "./_components/BrandGlobalNavigation/BrandGlobalNavigation";
import { BrandHero } from "./_components/BrandHero/BrandHero";
import { BrandMainContainer } from "./_components/BrandMainContainer/BrandMainContainer";
import { BrandSectionContainer } from "./_components/BrandSectionContainer/BrandSectionContainer";
import { BrandConceptContexts, BrandHeroContexts, BrandNavigationContexts, BrandWorkContexts } from "./_contexts/Brand.contexts";
import styles from "./page-brand.module.scss";

// 画像書き出し、コンポーネント作成、流し込み: 1h
// CSS: 1h
// 20250326

export const links: Route.LinksFunction = () => [
  {rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap",
  },
]

export function meta({}: Route.MetaArgs) {
  return [
    { titles: "6.Brand - デザインカンプ"},
  ]
}

const PageBrand = () => {
  return (
    <div className={styles['l-page-brand']}>
      <BrandHero pictureItem={BrandHeroContexts.pictureItem} />
      <BrandGrobalNavigation navItems={BrandNavigationContexts.navItems} />
      <BrandMainContainer>
        <BrandSectionContainer sectionItem={BrandConceptContexts.sectionItem} />
        <BrandSectionContainer sectionItem={BrandWorkContexts.sectionItem} />
        <BrandFooter />
      </BrandMainContainer>
    </div>
  )
}

export default PageBrand;