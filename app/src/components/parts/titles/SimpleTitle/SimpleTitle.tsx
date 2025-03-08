import React from "react";
import type { TitleProps } from "~/src/types/PartsProps.types";
import styles from "./SimpleTitle.module.scss";

const SimpleTitle = (props: TitleProps) => {
  const {text, tag} = props;

  const baseClass = 'title';

  // tagの値がh1, h2, h3, h4, h5, h6のいずれかの場合、title--{tagの値}をmodifireClassとして代入
  const modifierClass = tag.match(/^h[1-6]$/) ? styles[`title--${tag}`] : "";

  const className = `${baseClass} ${modifierClass}`;

  // h1~h6のタグをを生成
  return React.createElement(tag, { className }, text);
}

export default SimpleTitle;