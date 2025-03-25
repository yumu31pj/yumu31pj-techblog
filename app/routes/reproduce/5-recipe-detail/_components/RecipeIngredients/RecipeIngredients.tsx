import { RecipeDetailDivContainer } from "../RecipeDetailDivContainer/RecipeDetailDivContainer";
import styles from "./RecipeIngredients.module.scss";

export type RecipeIngredientsProps = {
  title: string;
  contents: {
    name: string,
    quantity: string
  } []
}

export const RecipeIngredients = (props: RecipeIngredientsProps) => {
  const { title, contents } = props;

  return (
    <RecipeDetailDivContainer title={title}>
      <dl className={styles['c-ingredients']}>
        {contents.map((content, key: number) => (
          <div key={key} className={styles['c-ingredients__item']}>
            <dt>{content.name}</dt>
            <dd>{content.quantity}</dd>
          </div>
        ))}
      </dl>
    </RecipeDetailDivContainer>
  )
}