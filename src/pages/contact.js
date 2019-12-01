import React from "react"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default () => {
  return (
    // TODO: できたら practiceと共通化しちゃう
    // TODO: add OGP for twitter
    <Layout>
      メンバーは随時募集しています！まずは見学だけでも大丈夫ですので、お気軽にご連絡ください
      <div style={{ marginTop: `3rem` }}>
        <div style={{ display: `flex`, marginBottom: `1rem` }}>
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            style={{ marginRight: `1rem` }}
          />
          <a
            href="http://twitter.com/psk_kunitachi"
            style={{ textDecoration: `none`, color: `powderblue` }}
          >
            @psk_kunitachi
          </a>
        </div>
        <div style={{ display: `flex` }}>
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            style={{ marginRight: `1rem` }}
          />
          確認中
        </div>
      </div>
    </Layout>
  )
}
