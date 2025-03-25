import type { PictureProps } from "~/src/types/PartsProps.types";
import type { RecipeFooterProps } from "../_components/RecipeFooter/RecipeFooter";
import type { RecipeSectionRecipesProps } from "../_components/RecipeSectionRecipes/RecipeSectionRecipes";

export const RecipeHeroContexts: PictureProps = {
  pictureItem: {
    srcSP: "/images/reproduce/4-recipe/mv_pc.png",
    srcSPWebp: "/images/reproduce/4-recipe/mv_pc.webp",
    widthSP: 900,
    heightSP: 600,
    altText: "Recipeのメイン画像",
    // breakpoint: 834
  }
}

export const RecipeListContexts: RecipeSectionRecipesProps = {
  recipeItems: [
    {
      pictureItem: {
        srcSP: "/images/reproduce/4-recipe/recipe_1_pc.png",
        srcSPWebp: "/images/reproduce/4-recipe/recipe_1_pc.webp",
        widthSP: 900,
        heightSP: 600,
        altText: "Recipeのメイン画像1",
        breakpoint: 834
      },
      linkTo: "#"
    },
    {
      pictureItem: {
        srcSP: "/images/reproduce/4-recipe/recipe_2_pc.png",
        srcSPWebp: "/images/reproduce/4-recipe/recipe_2_pc.webp",
        widthSP: 900,
        heightSP: 600,
        altText: "Recipeのメイン画像2",
        breakpoint: 834
      },
      linkTo: "#"
    },
    {
      pictureItem: {
        srcSP: "/images/reproduce/4-recipe/recipe_3_pc.png",
        srcSPWebp: "/images/reproduce/4-recipe/recipe_3_pc.webp",
        widthSP: 900,
        heightSP: 600,
        altText: "Recipeのメイン画像3",
        breakpoint: 834
      },
      linkTo: "#"
    },
  ]
}

export const RecipeNavigationContexts: RecipeFooterProps = {
  navigationItem: [
    {
      title: "Instagram",
      linkTo: "https://instagram.com"
    },
    {
      title: "Twitter",
      linkTo: "https://x.com/"
    },
    {
      title: "Facebook",
      linkTo: "https://facebook.com"
    },
  ]
}