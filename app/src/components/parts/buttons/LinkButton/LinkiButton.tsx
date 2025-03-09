import type { LinkButtonProps } from "~/src/types/PartsProps.types";
import styles from "./LinkiButton.module.scss";

const LinkButton = (props: LinkButtonProps) => {
  const {linkText, linkTo, type, isExternal} = props;

  const baseClass = "link-button";
  const modifierClass = type? baseClass + "--" + type : "";

  return (
    <a 
      href={linkTo}
      className={`${styles[baseClass]}${modifierClass && " " + styles[modifierClass]}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{linkText}</span>
    </a>
  )
}

export { LinkButton };
