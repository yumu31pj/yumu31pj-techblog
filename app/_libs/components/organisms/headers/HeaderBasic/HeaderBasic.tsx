
import ResponsiveImage from "@/_libs/components/atoms/images/ResponsiveImage/ResponsiveImage";
import HeaderBasicWrapper from "@/_libs/components/layouts/headers/HeaderBasicWrapper/HeaderBasicWrapper";
import HeaderInnerBasic from "@/_libs/components/layouts/headers/HeaderInnerBasic/HeaderInnerBasicBasic";
import { PageMap } from "@/_src/configs/siteInfo";
import HamburgerNavigationTypeA from "../../hamburgerNavigation/HamburgerNavigationTypeA/HamburgerNavigationTypeA";
import { HeaderBasicType } from "./HeaderBasic.types";

const HeaderBasic = (props: HeaderBasicType) => {
  const {logoImageItem, topLinkUrl} = props;
  return (
    <HeaderBasicWrapper>
      <HeaderInnerBasic>
        <h1>
          <a href={topLinkUrl}>
            <ResponsiveImage
              srcSP={logoImageItem.srcSP}
              srcPC={logoImageItem.srcPC}
              srcWebpSP={logoImageItem.srcWebpSP}
              srcWebpPC={logoImageItem.srcWebpPC}
              widthSP={logoImageItem.widthSP}
              heightSP={logoImageItem.heightSP}
              widthPC={logoImageItem.widthPC}
              heightPC={logoImageItem.heightPC}
              altText={logoImageItem.altText}
              breakpointPC={logoImageItem.breakpointPC}
              breakpointTB={logoImageItem.breakpointTB}
            />
          </a>
        </h1>
        <div>
          <HamburgerNavigationTypeA 
            linkItems={PageMap}
          />
        </div>
      </HeaderInnerBasic>
    </HeaderBasicWrapper>
  )
}

export default HeaderBasic;