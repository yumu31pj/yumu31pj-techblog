import styles from "./SectionWrapper.module.scss";

const SectionWrapper = ( {children}: {children: React.ReactNode } ) => {
  return (
    <section className={styles['section-wrapper']}>
      {children}
    </section>
  )
}

export default SectionWrapper;