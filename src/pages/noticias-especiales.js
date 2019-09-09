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
      <SEO
        title="Noticas Especiales"
        description={description}
        keywords={keywords}
      />
      <BlogContainer
        darkMode={true}
        data={data.data.allPrismicNoticiasEspeciales.nodes}
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogEspecialesQuery {
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
    allPrismicNoticiasEspeciales(
      limit: 3
      sort: { fields: [data___custom_publishdate], order: [DESC] }
    ) {
      nodes {
        data {
          custom_publishdate
          banner {
            url
            thumbnail {
              url
            }
          }
          title {
            text
          }
          excerpt {
            text
          }
          author {
            name {
              text
            }
          }
        }
      }
    }
  }
`

export default Noticias
