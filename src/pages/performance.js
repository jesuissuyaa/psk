import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import NextPerformance from "../components/nextPerformance"
export default () => {
  return (
    <Layout>
      <SEO title="発表" />
      年に3-4回ほど、国立市内のイベントを中心に演奏の発表をしています！
      <NextPerformance />
      {/* TODO: pull from data */}
      <div>
        2019年11月24日:
        <br />
        第64回くにたち市民文化祭 @国立市公民館
        <ol>
          <li>ルジャーン (Rejang)</li>
          <li>バリス (Balis)</li>
          <li>ギラ (Gilak)</li>
          <li>パニャンブラマ (Panyembrama)</li>
        </ol>
      </div>
    </Layout>
  )
}
