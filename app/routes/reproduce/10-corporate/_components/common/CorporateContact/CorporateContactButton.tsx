import type { LinkItemType } from "~/src/types/PartsProps.types";
import styles from "./CorporateContactButton.module.scss";

export const CorporateContactButton = ({title, linkTo, isExternal}: LinkItemType) => {
  return (
    <a href={linkTo} {...isExternal ? {target: "_blank", rel: "noopener noreferrer"} : {}} className={styles["c-link-button"]}>
      <span>{title}</span>
    </a>
  )
}