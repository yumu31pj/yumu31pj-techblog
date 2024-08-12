import { SimpleTitleH3Type } from "./SimpleTitleH3.types";
import styles from "./SimpleTitleH3Type.module.scss";

const SimpleTitleH3 = (props: SimpleTitleH3Type) => {
  const {title} = props;
  return (
    <h3 className={styles['simple-title--h3']}>{title}</h3>
  )
}

export default SimpleTitleH3;