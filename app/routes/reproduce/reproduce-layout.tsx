import { Outlet } from "react-router";
import styles from "./reproduce-layout.module.scss";

import MainContainer from "~/src/components/layouts/MainContainer/MainContainer";

const ReproduceLayout = () => {
  return (
    <MainContainer>
      <div className={styles['l-reproduce-container']}>
      <Outlet />
      </div>
    </MainContainer>
  )
}

export default ReproduceLayout;