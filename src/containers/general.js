import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GeneralComponent from "../components/generalNews/index.js"

const generalContainer = ({ data }) => {
  const title = data.prismicComun.data.title.text
  const description =
    data.prismicComun.data.metadescription.text ||
    data.prismicDatosComunes.data.metadescription.text
  const keywords =
    data.prismicComun.data.metakeywords.text ||
    data.prismicDatosComunes.data.metakeywords.text
  return (
    <Layout>
      <SEO title={title} keywords={keywords} description={description} />
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
        metadescription {
          text
        }
        metakeywords {
          text
        }
      }
    }
    prismicDatosComunes {
      data {
        metadescription {
          text
        }
        metakeywords {
          text
        }
      }
    }
  }
`
