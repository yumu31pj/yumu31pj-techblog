import parse from "html-react-parser";
import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureProps } from "~/src/types/PartsProps.types";
import styles from "./BrandSectionContainer.module.scss";

export type BrandSectionContainerProps = {
  sectionItem: {
    sectionInfo: {
      id?: string;
      direction?: 'normal' | 'reverse';
    },
    contentItem: {
      imageItem: PictureProps;
      title: string;
      subtitle: string;
      paragraph: string;
    }
  }
}

export const BrandSectionContainer = (props: BrandSectionContainerProps) => {
  const {sectionItem} = props;

  const baseClass = 'l-section';
  const modifierClasss = sectionItem.sectionInfo.direction ? baseClass + "--" + sectionItem.sectionInfo.direction : baseClass + "--normal"

  return (
    <section id={sectionItem.sectionInfo.id} className={`${styles['l-section']} ${modifierClasss && styles[modifierClasss]}`}>
      <div className={styles['c-sec-image']}>
        <Picture pictureItem={sectionItem.contentItem.imageItem.pictureItem} />
      </div>
      <div className={styles['c-sec-main']}>
        <div className={styles['c-sec-main__title']}>
          <h2>{sectionItem.contentItem.title}</h2>
          <p>{sectionItem.contentItem.subtitle}</p>
        </div>
        <p className={styles['c-sec-main__paragraph']}>{parse(sectionItem.contentItem.paragraph)}</p>
      </div>
    </section>
  )
}