import Picture from "~/src/components/parts/images/Picture/Picture";
import type { PictureProps } from "~/src/types/PartsProps.types";
import { RecipeDetailHowto, type RecipeDetailHowtoProps } from "../RecipeDetailHowto/RecipeDetailHowto";
import { RecipeIngredients, type RecipeIngredientsProps } from "../RecipeIngredients/RecipeIngredients";
import styles from "./RecipeDetailSectionContent.module.scss";

export type RecipeDetailSectionContentProps = {
  sectionItem: {
    title: string;
    overview: string;
    imageItem: PictureProps;
    ingredients: RecipeIngredientsProps;
    howto: RecipeDetailHowtoProps
  }
}

export const RecipeDetailSectionContent = (props: RecipeDetailSectionContentProps) => {
  const { sectionItem } = props;
  return (
    <section className={styles['l-content-container']}>
      <div className={styles['l-content-container__inner']}>      
        <div className={styles['c-content-image']}>
          <Picture pictureItem={sectionItem.imageItem.pictureItem} />
        </div>
        <div className={styles['c-content-detail']}>
          <h2 className={styles['c-content-detail__title']}>{sectionItem.title}</h2>
          <p className={styles['c-content-detail__overview']}>{sectionItem.overview}</p>
          <RecipeIngredients
            title={sectionItem.ingredients.title}
            contents={sectionItem.ingredients.contents}
          />
          <RecipeDetailHowto
            title={sectionItem.howto.title}
            listItems={sectionItem.howto.listItems}
          />
        </div>
      </div>
      <div className={styles['c-button']}>
        <a href="#">レシピ一覧を見る</a>
      </div>
    </section>
  )
}