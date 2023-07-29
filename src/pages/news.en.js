import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layoutEN"
import SEO from "../components/seo"
import BlogContainer from "../containers/blog.js"
import { Context, EN } from "../lang/context"
import DonateComponent from "../components/donate"

const Noticias = data => {
  const common = data.data.prismicDatosComunes.data
  const description = "Todos nuestras noticias especiales y reportajes en un solo lugar. Entérate de lo más relevante sobre el periodismo en México y la Frontera Norte."
  const keywords = common.metakeywords.text

  return (
    <Context.Provider value={EN}>
      <Layout>
        <SEO title="Blog" description={description} keywords={keywords} />
        <DonateComponent />
        <BlogContainer darkMode={false} site={data.data.site.siteMetadata} />
      </Layout>
    </Context.Provider>
  )
}
export const pageQuery = graphql`
  query blogQueryEN($lang: String!) {
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

export default Noticias
