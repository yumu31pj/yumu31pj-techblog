'use client';

import SimpleTitleH2 from "@/_libs/components/atoms/titles/SimpleTitle/SimpleTitleH2/SimpleTitleH2";
import SimpleTitleH3 from "@/_libs/components/atoms/titles/SimpleTitle/SimpleTitleH3/SimpleTitleH3";
import styles from "./page.module.scss";

const PageAbout = () => {

  return (
      <section>
        <SimpleTitleH2 title="About" />
        {/* <p>{"Now... Under Constructing..."}</p>
        <BlogTotalCountProvider>
          <ProviderTest />
        </BlogTotalCountProvider>
        <BlogCategoryListProvider>
          <CatTest />
        </BlogCategoryListProvider> */}
        <div className={styles['links-wrapper']}>
          <SimpleTitleH3 title="My Main Github Repositories" />
          <ul className={styles['link-list']}>
            <li className={styles['link-list__item']}>
              <a href="https://github.com/yumu31pj/yumu31pj-nextjs-library" target="_blank" rel="noopener noreferer">yumu31pj-nextjs-library</a>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default PageAbout;
