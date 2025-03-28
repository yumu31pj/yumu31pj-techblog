import styles from "./PortfolioSectionContainer.module.scss";

type PortfolioSectionContainerProps = {
  id?: string;
  marginTop?: string;
  children: React.ReactNode;
}

export const PortfolioSectionContainer = (props: PortfolioSectionContainerProps ) => {
  const {id, marginTop, children} = props;

  const baseClass = "l-section";
  const modifierClass = marginTop ? baseClass + "--mt-" + marginTop : undefined;

  return (
    <section id={id} className={`${styles[baseClass]} ${modifierClass && styles[modifierClass]}`}>
      {children}
    </section>
  )
}