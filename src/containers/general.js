import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GeneralComponent from "../components/generalNews/index.js"

const generalContainer = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.prismicComun.data.title.text} keywords={[]} />
      <GeneralComponent data={data.prismicComun.data} />
    </Layout>
  )
}

export default generalContainer
export const pageQuery = graphql`
  query SingleGeneralPage($uid: String!) {
    prismicComun(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`
