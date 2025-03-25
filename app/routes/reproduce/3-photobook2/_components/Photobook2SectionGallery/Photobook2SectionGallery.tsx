import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureProps } from "~/src/types/PartsProps.types";
import { Photobook2SectionContainer } from "../Photobook2SectionContainer/Photobook2SectionContainer";
import styles from "./Photobook2SectionGallery.module.scss";

export type Photobook2SectionGalleryProps = {
  pictureItems: PictureProps[];
}

export const Photobook2SectionGallery = (props: Photobook2SectionGalleryProps) => {
  const {pictureItems} = props;
  return (
    <Photobook2SectionContainer>
      <div className={styles['l-gallery']}>
        {pictureItems.map((pictureItem: PictureProps, key: number) => (
          <div className={styles['l-gallery__item']} key={key}>
            <Picture
              pictureItem={pictureItem.pictureItem}
            />
          </div>
        ))}
      </div>
    </Photobook2SectionContainer>
  )
}