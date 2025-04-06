import { CorporateHero } from "./_components/home/CorporateHero/CorporateHero";
import { CorporateHomeSectionAbout } from "./_components/home/CorporateHomeSectionAbout/CorporateHomeSectionAbout";
import { CorporateHomeSectionBusiness } from "./_components/home/CorporateHomeSectionBusiness/CorporateHomeSectionBusiness";
import { CorporateHomeSectionCompany } from "./_components/home/CorporateHomeSectionCompany/CorporateHomeSectionCompany";
import { CorporateHomeSectionNews } from "./_components/home/CorporateHomeSectionNews/CorporateHomeSectionNews";
import { CorporateHeroContext, CorporateHomeSectionAboutContext, CorporateHomeSectionBusinessContext, CorporateHomeSectionCompanyContext, NewsSectionContext } from "./_contexts/CorporateContexts";
import styles from "./page-corporate.module.scss";

const PageCorporate = () => {
  return (
    <main className={styles['c-home']}>
      <CorporateHero {...CorporateHeroContext} />
      <CorporateHomeSectionNews {...NewsSectionContext} />
      <CorporateHomeSectionAbout {...CorporateHomeSectionAboutContext}/>
      <CorporateHomeSectionBusiness {...CorporateHomeSectionBusinessContext} />
      <CorporateHomeSectionCompany {...CorporateHomeSectionCompanyContext} />
    </main>
  )
}

export default PageCorporate;