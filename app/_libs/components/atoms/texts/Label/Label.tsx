import styles from "./Label.module.scss";
import { LabelType } from "./Label.types";

const Label = (props: LabelType) => {
  const {text} = props;
  return (
    <span className={styles['label']}>
      {text}
    </span>
  )
}

export default Label;