import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layoutES"
import SEO from "../components/seo"
import BlogContainer from "../containers/blog.js"
import { Context, ES } from "../lang/context"
import DonateComponent from "../components/donate"

const Noticias = data => {
  const common = data.data.prismicDatosComunes.data
  const description = common.metadescription.text
  const keywords = common.metakeywords.text

  return (
    <Context.Provider value={ES}>
      <Layout>
        <SEO title="Blog" description={description} keywords={keywords} />
        <DonateComponent />
        <BlogContainer darkMode={false} site={data.data.site.siteMetadata} />
      </Layout>
    </Context.Provider>
  )
}
export const pageQuery = graphql`
  query blogQueryES($lang: String!) {
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
