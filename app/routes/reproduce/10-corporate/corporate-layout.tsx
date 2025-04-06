import { Outlet } from "react-router";
import { CorporateFooter } from "./_components/common/CorporateFooter/CorporateFooter";
import { CorporateHeader } from "./_components/common/CorporateHeader/CorporateHeader";
import styles from "./corporate-layout.module.scss";

const CorporateLayout = () => {
  return (
    <div className={styles["l-corporate-container"]}>
      <CorporateHeader />
      <Outlet />
      <CorporateFooter />
    </div>
  )
}

export default CorporateLayout