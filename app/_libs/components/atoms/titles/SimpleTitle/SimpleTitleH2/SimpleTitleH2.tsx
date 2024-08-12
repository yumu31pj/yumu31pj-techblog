import { SimpleTitleH2Type } from "./SimpleTitleH2.types";
import styles from "./SimpleTitleH2Type.module.scss";

const SimpleTitleH2 = (props: SimpleTitleH2Type) => {
  const {title} = props;
  return (
    <h2 className={styles['simple-title--h2']}>{title}</h2>
  )
}

export default SimpleTitleH2;