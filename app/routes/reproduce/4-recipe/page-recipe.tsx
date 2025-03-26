import type { Route } from "../+types/reproduce-layout";
import { RecipeFooter } from "./_components/RecipeFooter/RecipeFooter";
import { RecipeHero } from "./_components/RecipeHero/RecipeHero";
import { RecipeSectionIntroduction } from "./_components/RecipeSectionIntroduction/RecipeSectionIntroduction";
import { RecipeSectionRecipes } from "./_components/RecipeSectionRecipes/RecipeSectionRecipes";
import { RecipeHeroContexts, RecipeListContexts, RecipeNavigationContexts } from "./_contexts/Recipe.contexts";
import styles from "./page-recipe.module.scss";

// 画像書き出し、コンポーネント作成、流し込み: 50min
// CSS: 0.5h

export function meta({}: Route.MetaArgs) {
  return [
    { title: "4.Recipe - デザインカンプ模写" },
    { name: "description", content: "html, css, sass, React, サンプル" },
  ];
}

const PageRecipe = () => {
  return (
    <div className={styles['l-page-recipe']}>
      <main>
        <RecipeHero pictureItem={RecipeHeroContexts.pictureItem}/>
        <RecipeSectionIntroduction />
        <RecipeSectionRecipes recipeItems={RecipeListContexts.recipeItems}/>
      </main>
      <RecipeFooter navigationItem={RecipeNavigationContexts.navigationItem}/>
    </div>
  )
}

export default PageRecipe;