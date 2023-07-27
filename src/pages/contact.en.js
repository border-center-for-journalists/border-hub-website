import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContactUsComponent from "../components/contact/index.js"
import SEO from "../components/seo"

const ContactPage = ({ data }) => {
  const common = data.prismicDatosComunes.data
  const description = common.metadescription.text
  const keywords = common.metakeywords.text
  return (
    <Layout>
      <SEO title="Contacto" description={description} keywords={keywords} />
      <ContactUsComponent data={data.prismicContacto.data} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query ContactPageEN($lang: String!) {
    prismicDatosComunes(lang: { eq: $lang}) {
      data {
        metadescription {
          text
        }
        metakeywords {
          text
        }
      }
    }
    prismicContacto(lang: { eq: $lang}) {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        email {
          text
        }
        phone {
          text
        }
        address {
          text
        }
      }
    }
  }
`

export default ContactPage
