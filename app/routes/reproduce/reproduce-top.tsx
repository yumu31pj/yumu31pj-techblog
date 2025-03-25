import { SiteInfo } from "~/src/configs/SiteInfo";
import type { Route } from "../+types/home";
import styles from "./reproduce-top.module.scss";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "デザインカンプ模写リスト" },
    { name: "description", content: SiteInfo.description },
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
        </ul>
      </section>
      <section className={styles['c-sec']}>
        <p>このページの模写のデザイン還付は<a href="https://code-jump.com/xd-public/" target="_blank" rel="noopener noreferer">Codejump</a>に掲載されているFigmaデータを使わせていただいています。</p>
      </section>
    </main>
  )
}

export default PageReproduceTop