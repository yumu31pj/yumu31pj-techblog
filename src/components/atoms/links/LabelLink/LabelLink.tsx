import styles from "./LabelLink.module.scss";
import { LabelLinkType } from "./LabelLink.types";

const LabelLink = (props: LabelLinkType) => {
  const {linkText, linkTo} = props;
  return (
    <a className={styles['label-link']} href={linkTo}>
      {linkText}
    </a>
  )
}

export default LabelLink;