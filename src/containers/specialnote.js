import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SpecialNoticeComponent from "../components/notice/special"

const SpecialNoticeContainer = () => {
  return (
    <Layout>
      <SEO
        title="Nota especial"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <SpecialNoticeComponent />
    </Layout>
  )
}

export default SpecialNoticeContainer
