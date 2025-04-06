import type { RecipeDetailHowtoProps } from "../_components/RecipeDetailHowto/RecipeDetailHowto";
import type { RecipeDetailSectionContentProps } from "../_components/RecipeDetailSectionContent/RecipeDetailSectionContent";
import type { RecipeIngredientsProps } from "../_components/RecipeIngredients/RecipeIngredients";

export const RecipeDetailIngredientContexts: RecipeIngredientsProps = {
  title: "材料（2人分）",
  contents: [
    {
      name: "テキストテキスト",
      quantity: "1個"
    },
    {
      name: "テキストテキスト",
      quantity: "2個"
    },
    {
      name: "テキストテキスト",
      quantity: "3個"
    },
    {
      name: "テキストテキスト",
      quantity: "4個"
    },
    {
      name: "テキストテキスト",
      quantity: "5個"
    },
    {
      name: "テキストテキスト",
      quantity: "6個"
    },
  ]
}

export const RecipeDetailHowtoContexts: RecipeDetailHowtoProps = {
  title: "作り方",
  listItems: [
    "テキストテキストテキストテキスト",
    "テキストテキストテキストテキスト",
    "テキストテキストテキストテキスト",
    "テキストテキストテキストテキスト",
    "テキストテキストテキストテキスト",
  ]
}

export const RecipeDetailContentContexts: RecipeDetailSectionContentProps = {
  sectionItem: {
    title: "ひよこ豆とアボガドのタコス",
    overview: "たっぷりのひよこ豆とレンズ豆にアボガドとトマトを添えて、少しライムを絞ったらおいしいタコスのできあがりです。",
    imageItem: {
      srcSP: "/images/reproduce/5-recipe-detail/recipe_detail_1_sp.png",
      srcSPWebp: "/images/reproduce/5-recipe-detail/recipe_detail_1_sp.webp",
      srcPC: "/images/reproduce/5-recipe-detail/recipe_detail_1_pc.png",
      srcPCWebp: "/images/reproduce/5-recipe-detail/recipe_detail_1_pc.webp",
      widthSP: 375,
      heightSP: 469,
      altText: "ひよこ豆とアボガドのタコスのイメージ画像",
      breakpoint: 834
    },
    ingredients: RecipeDetailIngredientContexts,
    howto: RecipeDetailHowtoContexts
  }
}