import MainContainer from "~/src/components/layouts/MainContainer/MainContainer";

import { Outlet } from "react-router";

/**
 * 
 * routes.tsxでレイアウトとして指定する場合はdefaultでエクスポートすること
 */
const ParallaxContentsLayout = () => {
  return (
    <MainContainer type={"fullWidth"}>
      <Outlet />
    </MainContainer>
  )
}

export default ParallaxContentsLayout;