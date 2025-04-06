import type { CorporateSectionWrapperType } from "../../../types/CorporateType";
import styles from "./CorporateSectionWrapper.module.scss";

export const CorporateSectionWrapper = ({id, children, isFullWidth}: CorporateSectionWrapperType ) => {
  return (
    <section id={id} className={`${styles["l-section"]} ${isFullWidth && styles["l-section--full-width"]}`}>
      {children}
    </section>
  )
}