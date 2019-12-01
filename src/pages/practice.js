import React from "react"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

export default () => {
  return (
    <Layout>
      ふだんは週に1回集まって練習しています！月曜日と火曜日があるので、都合の良い方に参加できます
      <div style={{ marginTop: `3rem` }}>
        <div
          style={{ display: `flex`, marginRight: `1rem`, marginBottom: `1rem` }}
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            size="lg"
            style={{ marginRight: `1rem` }}
          />
          国立市内の先生のご自宅
        </div>
        <div style={{ display: `flex` }}>
          <FontAwesomeIcon
            icon={faCalendarAlt}
            size="lg"
            style={{ marginRight: `1rem` }}
          />
          月曜日 10:00 - 13:00 <br />
          火曜日 18:00 - 21:00
        </div>
      </div>
    </Layout>
  )
}
