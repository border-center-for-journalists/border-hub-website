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
      <div className="donate-container-news">
        <i className="icon-donar" />
        <h2>El periodismo requiere de tu apoyo</h2>
        <p>Conviértete en miembro del Border Hub</p>
        <a
          href="https://www.buymeacoffee.com/borderhub"
          target="_blank"
          className="bmc-button"
          rel="noopener noreferrer"
          style={{
            margin: "1.23em auto 0"
          }}
        >
          Donar
        </a>
      </div>
      <BlogContainer
        darkMode={false}
        site={data.data.site.siteMetadata}
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogQueryEN {
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
