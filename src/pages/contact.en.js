import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layoutEN"
import ContactUsComponent from "../components/contact/index.js"
import SEO from "../components/seo"
import { Context, EN } from "../lang/context"
const ContactPage = ({ data }) => {
  const common = data.prismicDatosComunes.data
  const description = common.metadescription.text
  const keywords = common.metakeywords.text
  return (
    <Context.Provider value={EN}>
      <Layout>
        <SEO title="Contacto" description={description} keywords={keywords} />
        <ContactUsComponent data={data.prismicContacto.data} />
      </Layout>
    </Context.Provider>
  )
}
export const pageQuery = graphql`
  query ContactPageEN($lang: String!) {
    prismicDatosComunes(lang: { eq: $lang } ) {
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
