import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContainer from "../containers/blog.js"

const Noticias = data => {
  const common = data.data.prismicDatosComunes.data
  const description = common.metadescription.text
  const keywords = common.metakeywords.text

  return (
    <Layout>
      <SEO title="Blog" description={description} keywords={keywords} />
      <BlogContainer
        darkMode={false}
        site={data.data.site.siteMetadata}
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogQuery {
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

export default Noticias
