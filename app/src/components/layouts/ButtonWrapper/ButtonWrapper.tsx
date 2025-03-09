import styles from "./ButtonWrapper.module.scss";

export type ButtonWrapperProps = {
  marginTop?: "s" | "m" | "l";
  children: React.ReactNode;
}

const ButtonWrapper = (props: ButtonWrapperProps) => {
  const {marginTop, children} = props;

  const baseClass = 'button-wrapper';
  const modifierClass = marginTop ? baseClass + "--" + marginTop : baseClass + "--s" 

  return (
    <div className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      {children}
    </div>
  )
}

export default ButtonWrapper;