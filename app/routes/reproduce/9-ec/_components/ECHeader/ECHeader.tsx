import styles from "./ECHeader.module.scss";

export const ECHeader = () => {
  return (
    <header id="header" className={styles['l-header']}>
      <div className={styles['l-header-logo']}>
        <svg viewBox="0 0 109 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.3 18.6964V3.42296H0V0.313293H14.195V3.42296H8.907V18.6964H5.3Z"/>
          <path d="M14.842 9.61717C14.7946 8.00831 15.0721 6.40641 15.658 4.90719C16.0607 3.97707 16.6235 3.12483 17.321 2.38926C17.9687 1.68523 18.7547 1.12239 19.63 0.735973C20.85 0.230182 22.1615 -0.017584 23.482 0.00828478C24.6536 -0.0442043 25.8229 0.15318 26.9122 0.587316C28.0016 1.02145 28.986 1.68239 29.8 2.52621C31.4726 4.46276 32.3229 6.97539 32.17 9.5292C32.3198 12.0661 31.4763 14.5618 29.818 16.4882C28.1124 18.099 25.8556 18.9976 23.5091 19C21.1626 19.0024 18.9039 18.1085 17.195 16.5012C15.542 14.6014 14.6975 12.1309 14.842 9.61717ZM18.558 9.49222C18.4366 11.186 18.934 12.8662 19.958 14.2212C20.4007 14.7264 20.9461 15.1314 21.5577 15.4093C22.1693 15.6872 22.8332 15.8316 23.5051 15.8328C24.1769 15.834 24.8413 15.6921 25.454 15.4164C26.0666 15.1408 26.6135 14.7377 27.058 14.2342C28.0789 12.8543 28.5697 11.1536 28.441 9.44224C28.5706 7.76184 28.093 6.0907 27.095 4.73226C26.6358 4.24052 26.08 3.84876 25.4625 3.5815C24.8449 3.31424 24.1788 3.17721 23.5059 3.179C22.8329 3.18078 22.1676 3.32133 21.5514 3.59186C20.9353 3.86239 20.3816 4.25708 19.925 4.75125C18.9155 6.11628 18.4307 7.79859 18.559 9.49122L18.558 9.49222Z"/>
          <path d="M38.029 18.6964V3.42296H32.729V0.313293H46.924V3.42296H41.629V18.6964H38.029Z"/>
          <path d="M64.516 18.6964H60.593L59.033 14.5212H51.893L50.419 18.6964H46.593L53.55 0.313293H57.364L64.516 18.6964ZM57.876 11.4235L55.415 4.60245L53.002 11.4235H57.876Z"/>
          <path d="M67.036 18.6945V0.45929H70.643V15.5958H79.611V18.6945H67.036Z"/>
          <path d="M82.2971 18.6945V0.45929H85.904V15.5958H94.872V18.6945H82.2971Z"/>
          <path d="M98.839 18.6964V10.9597L92.295 0.313293H96.523L100.723 7.58618L104.841 0.313293H108.996L102.428 10.9847V18.6964H98.834H98.839Z"/>
        </svg>
      </div>
      <nav className={styles['l-header-navigation-container']}>
        <ul className={styles['l-header-navigation']}>
          <li><a href="#">ALL</a></li>
          <li><a href="#">NEW</a></li>
          <li><a href="#">VINTAGE</a></li>
          <li><a href="#">CATEGORY</a></li>
          <li><a href="#">LOOKBOOK</a></li>
          <li><a href="#">BLOG</a></li>
        </ul>
        <ul className={styles['l-header-navigation']}>
          <li><a href="#">Login</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}