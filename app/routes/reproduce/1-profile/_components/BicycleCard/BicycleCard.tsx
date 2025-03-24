import styles from "./BicycleCard.module.scss";

export type BicycleCardProps = {
  imageItem: {
    srcSP: string,
    srcSPWebp?: string,
    srcPC?: string,
    srcPCWebp?: string,
    alt: string,
    width?: number,
    height?: number
  };
  title: string,
  text: string,
  linkTo: string,
}

export const BicycleCard = (props: BicycleCardProps) => {
  const {imageItem, title, text, linkTo} = props;
  const breakpoint = 365;

  return (
    <a href={linkTo} className={styles['c-bicyle-card']}>
      <div className={styles['c-bicyle-card__image']}>
        <picture>
          {imageItem.srcSPWebp && <source srcSet={imageItem.srcSPWebp} type="image/webp" media={`(max-width: ${breakpoint}px)`} />}
          {imageItem.srcPCWebp && <source srcSet={imageItem.srcPCWebp} type="image/webp" media={`(min-width: ${breakpoint + 1}px)`} />}
          {imageItem.srcPC && <source srcSet={imageItem.srcPC} type="image/webp" media={`(min-width: ${breakpoint + 1}px)`} />}
          <img src={imageItem.srcSP} alt={imageItem.alt} width={imageItem.width} height={imageItem.height} />
        </picture>
      </div>      
      <div className={styles['c-bicyle-card__detail']}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </a>
  )
}