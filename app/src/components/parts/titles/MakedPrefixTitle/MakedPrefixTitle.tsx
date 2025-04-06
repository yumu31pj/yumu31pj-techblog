import styles from "./MakedPrefixTitle.module.scss";

export type MakedPrefixTitleType = {
  title: string;
  tagType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  markType: "hyphen";
}

export const MarkPrefixTitle = ({title, tagType, markType}: MakedPrefixTitleType) => {
  const Tag = tagType
  const baseClass = "c-marked-title"
  const modifierClass = baseClass + "--" + markType

  return (
    <Tag className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      {title}
    </Tag>
  )
}