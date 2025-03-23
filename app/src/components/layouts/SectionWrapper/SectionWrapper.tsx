import styles from "./SectionWrapper.module.scss";

type SectionWrapperProps = {
  paddingTop? : "none";
  children: React.ReactNode;
}

const SectionWrapper = ( props: SectionWrapperProps ) => {
  const {paddingTop, children} = props;
  const baseClass = 'section-wrapper';
  const modifierClass = paddingTop ? baseClass + '--pt-' + paddingTop : '';
  return (
    <section className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      {children}
    </section>
  )
}

export default SectionWrapper;