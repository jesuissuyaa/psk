import React from "react"
import Menu from "../components/menu"
import Banner from "../assets/banner.jpeg"

export default ({ children }) => {
  return (
    <div
      style={{
        margin: `-8px`,
        background: `#BED838`,
        color: `#000`,
        minHeight: `100vh`,
      }}
    >
      <div style={{ paddingBottom: `5rem` }}>{children}</div>
      <Menu />
    </div>
  )
}
