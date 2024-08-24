import parse from "html-react-parser";
import styles from './Mokuji.module.scss';
import { MokujiListType } from './Mokuji.types';

const Mokuji = (props: MokujiListType) => {
  const { mokujiList } = props;

  return (
    <div className={styles['mokuji']}>
      <h3 className={styles['mokuji__title']}>Table of Contents</h3>
      <ol className={styles['mokuji__list']}>
        {mokujiList.map((item, key) => (
          <li className={`${styles['mokuji__item']} ${styles[`mokuji__item--type-${item.tagType}`]}`} key={key}>
            <a href={item.linkTo}>
              <span>{parse(item.title)}</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Mokuji;