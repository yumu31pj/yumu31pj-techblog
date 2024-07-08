import HeaderBasic from "@/_libs/components/organisms/headers/HeaderBasic/HeaderBasic";
import { SiteInfo } from "@/app/_configs/siteInfo";

const Header = () => {
  return (
    <HeaderBasic
      headerInnterItem={
        {logo: SiteInfo.siteTitle}
      }
    />
  )
}

export default Header;