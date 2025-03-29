import styles from "./ECMainContents.module.scss";

export const ECMainContents = () => {
  return (
    <main>
      <div className={styles["l-contents-container"]}>
        <div className={styles["c-item-image"]}>
          <picture>
            <source srcSet="/images/reproduce/9-ec/item.webp" type="image/webp" />
            <img src="/images/reproduce/9-ec/item.png" alt="商品画像イメージ" width={375} height={468} />
          </picture>
        </div>
        <div className={styles["c-item-detail"]}>
          <h2 className={styles["c-item-title"]}>TOTALLY Short Sleeve Shirt</h2>
          <div className={styles["c-item-overview"]}>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <p className={styles["c-item-price"]}>￥9,999 <sup>+tax</sup></p>
          <form className={styles["c-item-order"]}>
            <table className={styles["c-item-order__table"]}>
              <colgroup>
                <col className={styles['c-col-20p']} />
                <col className={styles['c-col-20p']} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Color</th>
                  <th>Size</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>White</td>
                  <td>S</td>
                  <td>
                    <select name="value" id="value" className={styles["c-select"]}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>White</td>
                  <td>M</td>
                  <td>
                    <select name="" id="" className={styles["c-select"]}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>White</td>
                  <td>L</td>
                  <td>
                    <select name="" id="" className={styles["c-select"]}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className={styles["c-item-order-submit"]} type="submit">ADD TO CART</button>
          </form>
          <table className={styles["c-size-table"]}>
            <colgroup>
              <col />
              <col className={styles["c-col-25p"]} />
              <col className={styles["c-col-25p"]} />
              <col className={styles["c-col-25p"]} />
            </colgroup>
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Weist</th>
                <th>Height</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>S</th>
                <td>99 ～ 99</td>
                <td>99 ～ 99</td>
                <td>99 ～ 99</td>
              </tr>
              <tr>
                <th>M</th>
                <td>99 ～ 99</td>
                <td>99 ～ 99</td>
                <td>99 ～ 99</td>
              </tr>
              <tr>
                <th>L</th>
                <td>99 ～ 99</td>
                <td>99 ～ 99</td>
                <td>99 ～ 99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}