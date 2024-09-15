import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import styles from "./one-line-carouse-wrapper.module.scss";

type FlashPostCarousel = {
  carouselItems: React.ReactNode[];
  direction?: 'horizon' | 'vertical';
}

const OneLineCarouseWrapper = (props: FlashPostCarousel) => {
  const {carouselItems, direction} = props;
  let modifierClass = direction == 'vertical' ? "embla__container--vertical" : "embla__container--horizon";

  let optionAxis: 'x' | 'y' | undefined = 'x';
  if (direction == 'horizon') {
    optionAxis = 'x';
  } else if (direction == 'vertical') {
    optionAxis = 'y';
  } else {
    optionAxis = 'x';
  }
  
  const [emblaRef] = useEmblaCarousel({ loop: true, axis: optionAxis}, [Autoplay()])

  return (
    <div className={styles['embla']} ref={emblaRef}>
       <div className={`${styles['embla__container']} ${styles[modifierClass]}`}>
        {carouselItems.map((post: React.ReactNode, key: number) => (
          <div className={`${styles['embla__slide']} ${styles['carousel-item']}`}>
            {post}
          </div>
        ))}
      </div>
    </div>
  )
}

export { OneLineCarouseWrapper };
