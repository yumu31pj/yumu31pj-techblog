import { Outlet } from "react-router";
import { SiteInfo } from "~/src/configs/SiteInfo";
import type { Route } from "../+types/home";
import "../../src/sass/foundations/_reset.scss";
import styles from "./reproduce-layout.module.scss";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "デザインカンプ模写" },
    { name: "description", content: SiteInfo.description },
  ];
}


const ReproduceLayout = () => {
  return (
    <div className={styles['l-reproduce-container']}>
      <Outlet />
    </div>
  )
}

export default ReproduceLayout;