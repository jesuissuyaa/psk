import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default () => {
  return (
    // TODO: できたら practiceと共通化しちゃう
    // TODO: add OGP for twitter
    <Layout>
      <SEO title="連絡先" />
      メンバーは随時募集しています！まずは見学だけでも大丈夫ですので、お気軽にご連絡ください
      <div style={{ marginTop: `3rem` }}>
        <a
          style={{
            display: `flex`,
            marginBottom: `1rem`,
            textDecoration: `none`,
            color: `#1da1f2`,
          }}
          href="http://twitter.com/psk_kunitachi"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            style={{ marginRight: `1rem`, color: `#1da1f2` }}
          />
          @psk_kunitachi
        </a>
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
