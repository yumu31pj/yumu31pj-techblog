import styles from "./RecipeSectionIntroduction.module.scss";

export const RecipeSectionIntroduction = () => {
  return (
    <section id="introduction" className={styles['l-section']}>
      <h2>Recipe Diary</h2>
      <p>
        日々の料理レシピをまとめています。<br />
        和食や洋食、中華、お菓子までいろいろな料理レシピをアップしていますので、<br />
        みなさんの献立にお役立てくださいね！
      </p>
    </section>
  )
}