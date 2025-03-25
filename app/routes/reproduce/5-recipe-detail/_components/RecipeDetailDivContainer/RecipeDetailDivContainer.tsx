import { RecipeDetailSubheading } from "../RecipeDetailSubheading/RecipeDetailSubheading";
import styles from "./RecipeDetailDivContainer.module.scss";

type RecipeDetailDivContainerProps = {
  title: string;
  children: React.ReactNode;
}

export const RecipeDetailDivContainer = (props: RecipeDetailDivContainerProps) => {
  const { title, children } = props;

  return (
    <div className={styles["l-div-container"]}>
      <RecipeDetailSubheading title={title} />
      <div className="l-div-container__inner">
        {children}
      </div>
    </div>
  )
}