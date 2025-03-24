import styles from "./SectionContainer.module.scss";

type SectionContainerProps = {
  id?: string;
  paddingTop?: number;
  children: React.ReactNode;
}
export const SectionContainer = (props: SectionContainerProps) => {
  const { id, paddingTop, children } = props;
  const baseClass = 'l-section';
  const modifierClass = paddingTop ? baseClass + "--pt-" + paddingTop.toString() : paddingTop + "--pt-" + "0";

  return (
    <section id={id} className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      {children}
    </section>
  )
}