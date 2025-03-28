import { Outlet } from "react-router";
import { PortfolioFooter } from "./_components/common/PortfolioFooter/PortfolioFooter";
import { PortfolioHeader } from "./_components/common/PortfolioHeader/PortfolioHeader";
import styles from "./laytout-portfolio.module.scss";

const LayoutPortpholio = () => {
  return (
    <div className={styles["l-portfolio-container"]}>
      <PortfolioHeader />
      <Outlet />
      <PortfolioFooter />
    </div>
  )
}

export default LayoutPortpholio;