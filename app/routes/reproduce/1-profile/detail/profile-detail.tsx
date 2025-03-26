import { Footer } from "../_components/Footer/Footer";
import { Header } from "../_components/Header/Header";
import styles from "./profile-detail.module.scss";

const PageProfileDetail = () => {
  return (
    <>
      <Header />
      <section id="detail" className={styles["c-detail"]}>
        <div className={styles['c-detail__image']}>
          <picture>
            <source srcSet="/images/reproduce/1-profile/detail/detail_sp.webp" type="image/webp" media="(max-width: 600px)" />
            <source srcSet="/images/reproduce/1-profile/detail/detail_pc.webp" type="image/webp" media="(min-width: 601px)" />
            <source srcSet="/images/reproduce/1-profile/detail/detail_pc.png" type="image/png" media="(min-width: 601px)" />
            <img src="/images/reproduce/1-profile/detail/detail_sp.png" alt="詳細ページのイメージ" width="345" height="228" />
          </picture>
        </div>
        <h2 className={styles['c-detail__title']}>
          タイトルタイトル１
        </h2>
        <div className={styles['c-detail__content']}>
          <p>テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１</p>
          <p>テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１</p>
          <p>テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１テキスト１</p>
        </div>

        <a href="/reproduce/1-profile" className={styles['c-detail__to-top']}>トップに戻る</a>
      </section>
      <Footer />
    </>
  )
}

export default PageProfileDetail;