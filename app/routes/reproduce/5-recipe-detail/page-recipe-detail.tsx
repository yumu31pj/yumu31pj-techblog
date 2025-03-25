import type { Route } from "../+types/reproduce-layout";
import { RecipeFooter } from "../4-recipe/_components/RecipeFooter/RecipeFooter";
import { RecipeNavigationContexts } from "../4-recipe/_contexts/Recipe.contexts";
import { RecipeDetailSectionContent } from "./_components/RecipeDetailSectionContent/RecipeDetailSectionContent";
import { RecipeDetailContentContexts } from "./_contexts/RecipeDetail.contexts";
import styles from "./page-recipe-detail.module.scss";

// 画像書き出し、コンポーネント作成、流し込み: 50min
// CSS: 0.5h

export function meta({}: Route.MetaArgs) {
  return [
    { title: "5.Recipe Detail - デザインカンプ模写" },
    { name: "description", content: "html, css, sass, React, サンプル" },
  ];
}

const PageRecipeDetail = () => {
  return (
    <div className={styles['l-recipe-detail']}>
      <RecipeDetailSectionContent sectionItem={RecipeDetailContentContexts.sectionItem} />
      <RecipeFooter navigationItem={RecipeNavigationContexts.navigationItem} />
    </div>
  )
}

export default PageRecipeDetail;