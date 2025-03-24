import styles from "./reproduce-top.module.scss";

const PageReproduceTop = () => {
  return (
    <main>
      <section className={styles['c-sec']}>
        <h2 className={styles['c-sec-title']}>カンプ模写リスト</h2>
        <ul className={styles['c-link-list']}>
          <li><a href="/reproduce/1-profile">1. Profile</a></li>
        </ul>
      </section>
      <section>
        <p>このページの模写のデザイン還付は<a href="https://code-jump.com/xd-public/" target="_blank" rel="noopener noreferer">Codejump</a>に掲載されているFigmaデータを使わせていただいています。</p>
      </section>
    </main>
  )
}

export default PageReproduceTop