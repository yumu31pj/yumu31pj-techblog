import type { PictureProps } from "~/src/types/PartsProps.types";
import styles from "./Picture.module.scss";

const Picture = (props: PictureProps) => {
  const {pictureItem} = props;

  return (
    <picture className={styles['picture']}>
      {pictureItem.srcSPWebp && 
        <source 
          srcSet={pictureItem.srcSPWebp} 
          type="image/webp"
          media={`(max-width: ${pictureItem.breakpoint} px)`}
          {...(pictureItem.widthSP && { width: pictureItem.widthSP })} 
          {...(pictureItem.heightSP && { height: pictureItem.heightSP })} 
        />
      }
      {pictureItem.srcPCWebp && 
        <source 
          srcSet={pictureItem.srcPCWebp} 
          media={`(min-width: ${pictureItem.breakpoint && pictureItem.breakpoint + 1}px)`} 
          type="image/webp" 
          {...(pictureItem.widthPC && { width: pictureItem.widthPC })} 
          {...(pictureItem.heightPC && { height: pictureItem.heightPC })} 
        />
      }
      {pictureItem.srcPC && 
        <source 
          srcSet={pictureItem.srcPC} 
          media={`(min-width: ${pictureItem.breakpoint && pictureItem.breakpoint + 1}px)`} 
          type="image/png"
          {...(pictureItem.widthPC && { width: pictureItem.widthPC })} 
          {...(pictureItem.heightPC && { height: pictureItem.heightPC })} 
        />
      }
      <img 
        src={pictureItem.srcSP} 
        {...(pictureItem.widthSP && { width: pictureItem.widthSP })} 
        {...(pictureItem.heightSP && { height: pictureItem.heightSP })} 
        alt={pictureItem.altText}
        loading={pictureItem.isLazy ? "lazy": undefined}
      />
    </picture>
  )
}

export default Picture;