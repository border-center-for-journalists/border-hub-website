import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layoutEN"
import SEO from "../components/seo"
import BlogContainer from "../containers/blog.js"
import { Context, EN } from "../lang/context"

const Noticias = data => {
  const common = data.data.prismicDatosComunes.data
  const description = common.metadescription.text
  const keywords = common.metakeywords.text
  return (
    <Context.Provider value={EN}>
      <Layout>
        <SEO
          lang="en-US"
          title={EN.news.special_investigations}
          description={description}
          keywords={keywords}
        />
        <BlogContainer darkMode={true} site={data.data.site.siteMetadata} />
      </Layout>
    </Context.Provider>
  )
}
export const pageQuery = graphql`
  query blogEspecialesQueryEN($lang: String!) {
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
