import React from "react"
import Logo from "../assets/logo.jpg"
import Header from "../assets/photo_2019-11.jpg"
import Menu from "../components/menu"
import styles from "./layout.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"

export default ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.bubbleWrapper}>
        <div className={styles.bubble}>
          <FontAwesomeIcon
            icon={faCamera}
            size="lg"
            className={styles.cameraIcon}
          />
          <div>第64回くにたち市民文化祭</div>
        </div>
        <div className={styles.triangle} />
      </div>
      <img
        src={Header}
        alt="2019年11月のくにたち市民文化祭"
        className={styles.photo}
      />
      <div className={styles.textContainer}>{children}</div>
      <Menu />
    </div>
  )
}
