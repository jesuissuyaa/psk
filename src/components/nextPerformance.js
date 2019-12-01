import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic } from "@fortawesome/free-solid-svg-icons"

export default () => {
  return (
    <div
      style={{
        color: "#ff8c84",
        display: "flex",
        justifyContent: "center",
        margin: "1rem auto",
      }}
    >
      <div style={{ marginRight: ".5rem" }}>
        <FontAwesomeIcon icon={faMusic} size="lg" />
      </div>
      <div>
        次回の発表予定は<b>未定</b>です！ <br />
        (2019年11月 現在)
      </div>
    </div>
  )
}
