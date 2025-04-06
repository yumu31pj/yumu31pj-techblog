import parse from "html-react-parser"
import React from "react"
import type { CorporateProfileType } from "../../../types/CorporateType"
import styles from "./CorporateProfile.module.scss"

export const CorporateProfile = ({profileItems}: {profileItems: CorporateProfileType[]} ) => {
  return (
    <dl className={styles["c-profile"]}>
      {profileItems.map((profile, key: number) => (
        <React.Fragment key={key}>
          <dt key={key}>{profile.term}</dt>
          <dd>{parse(profile.detail)}</dd>
        </React.Fragment>
      ))}
    </dl>
  )
}