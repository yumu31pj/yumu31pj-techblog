import styles from "./RecipeFooter.module.scss";

export type RecipeFooterProps = {
  navigationItem: {
    title: string;
    linkTo: string;
  }[]
} 

export const RecipeFooter = (props: RecipeFooterProps) => {
  const {navigationItem} = props;
  return (
    <footer id="footer" className={styles["l-footer"]}>
      <div className={styles["c-footer-navigation"]}>
        {navigationItem.map((item, key:number) => (
          <a href={item.linkTo} key="key" target="_blank" rel="noopener noreferer">{item.title}</a>
        ))}
      </div>
      <p className={styles['c-copyright']}><small>© 2021 Recipe Diary</small></p>
    </footer>
  )
}