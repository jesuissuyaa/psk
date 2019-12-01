import React from "react"
import Menu from "../components/menu"
import Banner from "../assets/banner.jpeg"
import styles from "./blogLayout.module.scss"
export default ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>{children}</div>
      <Menu />
    </div>
  )
}
