import { Outlet } from "react-router";
import MainContainer from "~/src/components/layouts/MainContainer/MainContainer";
import "../../../sass/styles.scss";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";


/**
 * 
 * routes.tsxでレイアウトとして指定する場合はdefaultでエクスポートすること
 */
const ParallaxContentsLayout = () => {
  return (
    <>
      <Header />
      <MainContainer type={"fullWidth"}>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  )
}

export default ParallaxContentsLayout;