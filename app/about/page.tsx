import SimpleTitleH2 from "@/components/atoms/titles/SimpleTitle/SimpleTitleH2/SimpleTitleH2";
import SimpleTitleH3 from "@/components/atoms/titles/SimpleTitle/SimpleTitleH3/SimpleTitleH3";
import { SiteInfo } from "app/_src/configs/siteInfo";
import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "About Me" + " | " + SiteInfo.siteTitle,
  description: "About Me Page" + " | " + SiteInfo.siteDescription,
  // robots: {
  //   index: false, // set noindex
  // },
};

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
              <a href="https://github.com/yumu31pj/yumu31pj-react-bootstrap" target="_blank" rel="noopener noreferer">React Component Library</a>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default PageAbout;
