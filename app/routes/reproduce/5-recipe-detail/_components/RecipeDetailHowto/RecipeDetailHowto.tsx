import { RecipeDetailDivContainer } from "../RecipeDetailDivContainer/RecipeDetailDivContainer";
import styles from "./RecipeDetailHowto.module.scss";

export type RecipeDetailHowtoProps = {
  title: string;
  listItems: string[];
}

export const RecipeDetailHowto = (props: RecipeDetailHowtoProps) => {
  const { title, listItems } = props;

  return (
    <RecipeDetailDivContainer title={title}>
      <ol className={styles['c-howto']}>
        {listItems.map((item: string, key: number) => (
          <li key={key}>{item}</li>
        ))}
      </ol>
    </RecipeDetailDivContainer>
  )
}