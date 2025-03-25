import { Photobook2SectionContainer } from "../Photobook2SectionContainer/Photobook2SectionContainer";
import { Photobook2SectionTitle } from "../Photobook2SectionTitle/Photobook2SectionTitle";
import styles from "./Photobook2SectionDetail.module.scss";

export const Photobook2SectionDetail = () => {
  return (
    <Photobook2SectionContainer id={"detail"} bgColorType={"gray"}>
      <Photobook2SectionTitle title={"detail"} />
      <div className={styles['c-detail-container']}>
        <div className={styles['c-detail-content-first']}>
          <dl>
            <dt>著者</dt><dd>タイトルタイトルタイトル</dd>
            <dt>出版社</dt><dd>タイトルタイトルタイトル</dd>
            <dt>発行年</dt><dd>2021年1月1日</dd>
          </dl>
        </div>
        <div className={styles['c-detail-content-second']}>
          <div className={styles['c-detail-content-second__paragraph']}>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <a href="#">オンラインストアで見る</a>
        </div>
      </div>
    </Photobook2SectionContainer>
  )
}