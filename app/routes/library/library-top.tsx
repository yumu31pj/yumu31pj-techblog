import Calendar from "~/src/components/features/Calendar/Calendar";
import ResizableBox from "~/src/components/features/ResizableBox/ResizableBox";
import MainContainer from "~/src/components/layouts/MainContainer/MainContainer";
import SectionWrapper from "~/src/components/layouts/SectionWrapper/SectionWrapper";
import ComponentBox from "~/src/components/pages/library/ComponentBox/ComponentBox";
import { HamburgerButton } from "~/src/components/parts/HamburgerButton/HamburgerButton";
import Picture from "~/src/components/parts/images/Picture/Picture";
import SimpleTitle from "~/src/components/parts/titles/SimpleTitle/SimpleTitle";
import { PageMap } from "~/src/configs/SiteInfo";
import useToggleIsOpen from "~/src/hooks/useToggleIsOpen";

const LibraryTop = () => {

  const [isOpen, toggleIsOpen] = useToggleIsOpen(false);

  return (
    <MainContainer>
      <SectionWrapper>
        <SimpleTitle text={PageMap.library.pageTitle} tag={"h2"} />

        {/* Picture */}
        <ComponentBox
          title={"Picture"}
          component={
            <Picture
                srcSP={"/images/samples/750x750.png"}
                srcSPWebp={"/images/samples/750x750.webp"}
                widthSP={350}
                heightSP={350}
                srcPC={"/images/samples/1200x900.png"}
                srcPCWebp={"/images/samples/1200x900.webp"}
                widthPC={1200}
                heightPC={900}
                altText={"Picture Component Image"}
                isLazy={true}
                breakpoint={75}
            />
          }
          explanation="pictureタグをコンポーネントしたものです。propsで属性を渡すことでpictureタグを毎回書く手間を省くためのものです。<br>画面幅を広げたり縮めたりして画像が変わることを確認して下さい。"
          linkTo="/showcase/picture"
          
        />

        {/* Resizable Box */}
        <ComponentBox
          title={"Resizable Box"}
          component={
            <ResizableBox><img src="/images/samples/750x750.webp" alt={"Resizable Box"} /></ResizableBox>
          }
          explanation="ユーザー操作で要素のサイズを変更できるコンポーネントです"
          linkTo="/showcase/resizablebox"
        />

        {/* Calendar */}
        <ComponentBox
          title={"Calendar"}
          component={
            <Calendar year={new Date().getFullYear()} month={new Date().getMonth()} />
          }
          explanation="指定した月のカレンダーを返すコンポーネントです"
          linkTo="/showcase/calendar"
        />

        {/* Parallax */}
        <ComponentBox
          title={"Parallax"}
          component={
            <Picture 
                srcSP={'/images/library/Parallax.gif'}
                heightSP={300}
                altText={'シンプルなParallaxページのサンプル'}
            />
          }
          explanation="シンプルなParallaxページのサンプルです。<br />サンプルページは<a href='/parallax'>こちら</a>から"
        />

        {/* HamburgerButton */}
        <ComponentBox
          title="Hamburger Button"
          component={
            <div style={{marginTop: '16px'}}>
              <HamburgerButton isHamburgerOpen={isOpen} toggleIsHamburgerOpen={toggleIsOpen} />
            </div>
          }
          explanation="ハンバーガーメニューのハンバーガーボタンコンポーネントです"
          linkTo="/showcase/hamburger-button"
        />

      </SectionWrapper>
    </MainContainer>
  )
}

export default LibraryTop;