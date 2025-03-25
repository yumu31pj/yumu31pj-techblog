import type { Route } from "../+types/reproduce-layout";
import { Photobook2Footer } from "./_components/Photobook2Footer/Photobook2Footer";
import { Photobook2Header } from "./_components/Photobook2Header/Photobook2Header";
import { Photobook2Hero } from "./_components/Photobook2Hero/Photobook2Hero";
import { Photobook2SectionDetail } from "./_components/Photobook2SectionDetail/Photobook2SectionDetail";
import { Photobook2SectionGallery } from "./_components/Photobook2SectionGallery/Photobook2SectionGallery";
import { Photobook2SectionIndex } from "./_components/Photobook2SectionIndex/Photobook2SectionIndex";
import { Photobook2GalleryContext, Photobook2Indexontext } from "./_contexts/Photobook2.contexts";

// 画像書き出し、コンポーネント作成、流し込み: 1h
// CSS: 0.5h

export function meta({}: Route.MetaArgs) {
  return [
    { title: "3.Photo Book 2 - デザインカンプ模写" },
    { name: "description", content: "html, css, sass, React, サンプル" },
  ];
}

const PagePhotobook2 = () => {
  return (
    <>
      <Photobook2Header />
      <Photobook2Hero />
      <Photobook2SectionIndex listItem={Photobook2Indexontext.listItem}/>
      <Photobook2SectionGallery pictureItems={Photobook2GalleryContext.pictureItems}/>
      <Photobook2SectionDetail />
      <Photobook2Footer />
    </>
  )
}

export default PagePhotobook2;