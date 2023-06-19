import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContainer from "../containers/blog.js"

const Noticias = data => {
  const common = data.data.prismicDatosComunes.data
  const description = "Todos nuestras noticias especiales y reportajes en un solo lugar. Entérate de lo más relevante sobre el periodismo en México y la Frontera Norte."
  const keywords = common.metakeywords.text
  return (
    <Layout>
      <SEO
        title="Noticias Especiales"
        description={description}
        keywords={keywords}
      />
      <BlogContainer
        darkMode={true}
        site={data.data.site.siteMetadata}
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogEspecialesQuery {
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
