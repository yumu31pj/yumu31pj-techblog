import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureType } from "~/src/types/PartsProps.types";
import styles from "./RecipeSectionRecipes.module.scss";

export type RecipeSectionRecipesProps = {
  recipeItems: RecipeSectionRecipeProps[];
}

type RecipeSectionRecipeProps = PictureType & {
  linkTo: string;
}

export const RecipeSectionRecipes = (props: RecipeSectionRecipesProps) => {
  const {recipeItems} = props;
  return (
    <div className={styles['c-recipes-container']}>
      <div className={styles['c-recipe-list']}>
        {recipeItems.map((recipe: RecipeSectionRecipeProps, key: number) => (
          <a href={recipe.linkTo} key={key}>
            <Picture {...recipe} />
          </a>
        ))}
      </div>
      <div className={styles['c-button-link']}>
        <a href="#">レシピ一覧を見る</a>
      </div>
    </div>
  )
}