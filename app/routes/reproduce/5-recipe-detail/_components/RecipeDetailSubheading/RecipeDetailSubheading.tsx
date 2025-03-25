import styles from "./RecipeDetailSubheading.module.scss";

export type RecipeDetailSubheadingProps = {
  title: string;
}

export const RecipeDetailSubheading = (props: RecipeDetailSubheadingProps) => {
  const { title } = props;
  return (
    <h3 className={styles["c-subheading"]}>{title}</h3>
  )
}