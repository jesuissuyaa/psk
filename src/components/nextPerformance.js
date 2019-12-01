import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import styles from "./nextPerformance.module.scss"

export default () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faMusic} size="lg" className={styles.icon} />
      <div>
        次回の発表予定: <b>未定</b> <br />
        (2019年11月 現在)
      </div>
    </div>
  )
}
