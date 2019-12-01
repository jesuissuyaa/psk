import React from "react"
import Layout from "../components/layout"
import Logo from "../assets/logo.jpg"
import Banner from "../assets/banner.jpeg"
import Header from "../assets/photo_2019-11.jpg"
import Menu from "../components/menu"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import NextPerformance from "../components/nextPerformance"

export default () => {
  return (
    <Layout>
      <h2 style={{ textAlign: "center", fontSize: "1.3rem" }}>
        パサール・スニ・くにたち
      </h2>
      <NextPerformance />
      わたしたちは、2018年に結成した国立市のガムラングループです。国立市内のイベントを中心に、年に3-4回演奏発表をしています。メンバー随時募集中ですので、お気軽にご連絡ください！
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: ".8rem",
          justifyContent: "space-between",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          marginTop: `1rem`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faTwitter} size="3x" />
          @psk_kunitachi
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
          確認中
        </div>
      </div>
    </Layout>
  )
}
