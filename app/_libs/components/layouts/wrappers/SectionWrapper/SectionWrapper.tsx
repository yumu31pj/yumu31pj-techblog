import styles from "./SectionWrapper.module.scss";
import { SectionWrapperType } from "./SectionWrapper.types";

const SectionWrapper = (props: SectionWrapperType) => {
  const {id, children} = props;

  return (
    <section id={id} className={styles['section-wrapper']}>
      {children}
    </section>
  )
}

export default SectionWrapper;