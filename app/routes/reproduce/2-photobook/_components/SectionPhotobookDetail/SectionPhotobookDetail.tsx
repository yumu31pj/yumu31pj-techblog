import styles from "./SectionPhotobookDetail.module.scss";

export const SectionPhotobookDetail = () => {
  return (
    <section id="" className={styles['c-detail-sec']}>
      <h2 className={styles["c-detail-sec__title"]}>DETAIL</h2>
      <div className={styles['c-detail-container']}>
        <div className={styles['c-detail-img']}>
          <picture>
            <source srcSet="/images/reproduce/2-photobook/detail_sp.webp" type="image/webp" media="(max-width: 420px)" />
            <source srcSet="/images/reproduce/2-photobook/detail_pc.webp" type="image/webp" media="(min-width: 421px)" />
            <source srcSet="/images/reproduce/2-photobook/detail_pc.png" type="image/png" media="(min-width: 421px)" />
            <img src="/images/reproduce/2-photobook/detail_sp.png" alt="Detailセクションイメージ" width="340" height="583" loading="lazy" />
          </picture>
        </div>
        
        <div className={styles['c-detail-info']}>
          <h3>タイトルタイトルタイトル</h3>
          <dl>
            <dt>著者</dt><dd>タイトルタイトルタイトル</dd>
            <dt>出版社</dt><dd>タイトルタイトルタイトル</dd>
            <dt>発行年</dt><dd>タイトルタイトルタイトル</dd>
          </dl>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          <a href="#">オンラインストアで見る</a>
        </div>
      </div>
    </section>
  )
}