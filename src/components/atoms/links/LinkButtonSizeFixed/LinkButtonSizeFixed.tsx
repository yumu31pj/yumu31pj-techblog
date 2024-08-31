import styles from "./LinkButtonSimple.module.scss";
import { LinkButtonSizeFixedTypes } from "./LinkButtonSizeFixed.types";

const LinkButtonSizeFixed = (props: LinkButtonSizeFixedTypes) => {
  const {linkText, linkAddress, isExternal = false} = props;

  return (
    <>
      {isExternal ? (
        <div className={styles["c-link-button-size-fixed"]}>
          <a href={linkAddress} className={styles["c-link-button-size-fixed"]} target="_blank" rel="noopener noreferer">
          {linkText}
        </a>
      </div>
      ) : (
        <div className={styles["c-link-button-size-fixed"]}>
          <a href={linkAddress} className={styles["c-link-button-size-fixed"]}>
            {linkText}
          </a>
        </div>
      )}
      
    </>
  )
}

export default LinkButtonSizeFixed;