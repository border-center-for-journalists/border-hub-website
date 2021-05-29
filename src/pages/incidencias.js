import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContainer from "../containers/incidents.js"

const Incidencias = data => {
  const common = data.data.prismicDatosComunes.data
  const description = common.metadescription.text
  const keywords = common.metakeywords.text
  return (
    <Layout>
      <SEO
        title="Incidencias"
        description={description}
        keywords={keywords}
      />
      <BlogContainer
        site={data.data.site.siteMetadata}
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogIncidenciasQuery {
    site {
      siteMetadata {
        API_KEY
        API_REF
        API_URL
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

export default Incidencias
