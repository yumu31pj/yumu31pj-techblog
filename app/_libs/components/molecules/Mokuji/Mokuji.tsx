"use client";

import styles from './Mokuji.module.scss';
import { MokujiListType } from './Mokuji.types';

const Mokuji = (props: MokujiListType) => {
  const { mokujiList } = props;

  return (
    <div className={styles.mokuji}>
      <h3 className={styles.mokuji__title}><span>Contents</span></h3>
      <ol className={styles.mokuji__list}>
        {mokujiList.map((item, key) => (
          <li className={`${styles.mokuji__item} ${styles[`mokuji__type--${item.mokujiType}`]}`} key={key}>
            <a href={item.mokujiUrl}>
              <span dangerouslySetInnerHTML={{ __html: item.mokujiText }} />
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Mokuji;