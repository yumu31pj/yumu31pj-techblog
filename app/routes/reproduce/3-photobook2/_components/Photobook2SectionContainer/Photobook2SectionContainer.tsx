import styles from "./Photobook2SectionContainer.module.scss";

type Photobook2SectionContainerProps = {
  id?: string;
  bgColorType?: "gray";
  children: React.ReactNode;
}

export const Photobook2SectionContainer = (props: Photobook2SectionContainerProps) => {
  const {id, bgColorType, children} = props;
  const baseClass = "l-section";
  const modifierClass = bgColorType ? baseClass + "--" + bgColorType : undefined;

  return (
    <section id={id} className={`${styles[baseClass]} ${modifierClass && styles[modifierClass]}`}>
      {children}
    </section>
  )
}