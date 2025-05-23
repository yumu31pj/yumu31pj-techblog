import type { Route } from "../+types/home";
import styles from "./reproduce-top.module.scss";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "デザインカンプ模写リスト" },
    { name: "description", content: "html, css, sass, React, サンプル" },
  ];
}

const PageReproduceTop = () => {
  return (
    <main>
      <section className={styles['c-sec']}>
        <h2 className={styles['c-sec-title']}>カンプ模写リスト</h2>
        <ul className={styles['c-link-list']}>
          <li><a href="/reproduce/1-profile">1. Profile</a></li>
          <li><a href="/reproduce/2-photobook">2. Photo Book</a></li>
          <li><a href="/reproduce/3-photobook2">3. Photo Book 2</a></li>
          <li><a href="/reproduce/4-recipe">4. Recipe</a></li>
          <li><a href="/reproduce/5-recipe-detail">5. Recipe Detail</a></li>
          <li><a href="/reproduce/6-brand">6. Brand</a></li>
          <li><a href="/reproduce/7-portfolio">7. Portfolio</a></li>
          <li><a href="/reproduce/8-store">8. Store</a></li>
          <li><a href="/reproduce/9-ec">9. EC</a></li>
          <li><a href="/reproduce/10-corporate">10. Corporate</a></li>
        </ul>
      </section>
      <section className={styles['c-sec']}>
        <p>このページの模写のデザインカンプは<a href="https://code-jump.com/xd-public/" target="_blank" rel="noopener noreferer">Codejump</a>に掲載されているFigmaデータを使わせていただいています。</p>
      </section>
    </main>
  )
}

export default PageReproduceTop