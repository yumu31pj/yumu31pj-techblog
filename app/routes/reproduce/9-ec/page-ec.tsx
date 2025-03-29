import type { Route } from "../+types/reproduce-layout";
import { ECFooter } from "./_components/ECFooter/ECFooter";
import { ECHeader } from "./_components/ECHeader/ECHeader";
import { ECMainContents } from "./_components/ECMainContents/ECMainContents";
import styles from "./page-ec.module.scss";

// 画像書き出し、コンポーネント作成、流し込み: 0.5h
// CSS: 1h
// 20250329

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Zen+Kaku+Gothic+Antique&display=swap",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    {title: "9.EC  - デザインカンプ模写"}
  ]
}

const PageEC = () => {
  return (
    <div className={styles['l-page-ec']}>
      <ECHeader />
      <ECMainContents />
      <ECFooter />
    </div>
  )
}

export default PageEC;