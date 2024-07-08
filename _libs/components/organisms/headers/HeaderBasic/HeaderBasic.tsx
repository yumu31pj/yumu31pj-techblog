import HeaderBasicWrapper from "@/_libs/components/layouts/headers/HeaderBasicWrapper/HeaderBasicWrapper";
import HeaderInnerBasic from "@/_libs/components/layouts/headers/HeaderInnerBasic/HeaderInnerBasicBasic";
import { HeaderBasicType } from "./HeaderBasic.types";

const HeaderBasic = (props: HeaderBasicType) => {
  const {headerInnterItem} = props;
  return (
    <HeaderBasicWrapper>
      <HeaderInnerBasic
        logo={headerInnterItem.logo}
      />
    </HeaderBasicWrapper>
  )
}

export default HeaderBasic;