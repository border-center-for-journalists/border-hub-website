import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NormalNoticeComponent from "../components/notice/normal"

const NormalNoticeContainer = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Nota especial"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <NormalNoticeComponent/>
    </Layout>
  )
}

export default NormalNoticeContainer

