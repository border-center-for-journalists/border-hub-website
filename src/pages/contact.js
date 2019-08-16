import React from "react"
import Layout from "../components/layout"
import ContactUsComponent from "../components/contact/index.js"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <ContactUsComponent data={data.prismicContacto.data} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query ContactPage {
    prismicContacto {
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
