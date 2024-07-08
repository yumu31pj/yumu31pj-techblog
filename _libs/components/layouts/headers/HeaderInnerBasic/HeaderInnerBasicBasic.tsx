import styles from "./HeaderInnerBasic.module.scss";
import { HeaderInnerBasicType } from "./HeaderInnerBasic.types";

const HeaderInnerBasic = (props: HeaderInnerBasicType) => {
  const {logo} = props;
  return (
    <div className={styles['l-header-inner']}>
      <h1>{logo}</h1>
      <nav></nav>
    </div>
  )
}

export default HeaderInnerBasic;