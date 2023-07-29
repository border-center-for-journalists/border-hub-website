import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layoutEN"
import SEO from "../components/seo"
import BlogContainer from "../containers/incidents.js"
import { Context, EN } from "../lang/context"

const Incidencias = data => {
  const common = data.data.prismicDatosComunes.data
  const description = "Entérate de las últimas incidencias en español sobre periodistas en la Frontera Norte. ¡Descubre como puedes apoyarlos a través de una donación! "
  const keywords = common.metakeywords.text
  return (
    <Context.Provider value={EN}>
      <Layout>
        <SEO
          title="Incidencia"
          description={description}
          keywords={keywords}
        />
        <BlogContainer site={data.data.site.siteMetadata} />
      </Layout>
    </Context.Provider>
  )
}
export const pageQuery = graphql`
  query blogIncidenciasQueryEN($lang: String!) {
    site {
      siteMetadata {
        API_KEY
        API_REF
        API_URL
      }
    }
    prismicDatosComunes(lang: { eq: $lang }) {
      lang
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
