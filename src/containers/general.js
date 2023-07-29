import React from "react"
import { graphql } from "gatsby"
import LayoutES from "../components/layoutES"
import LayoutEN from "../components/layoutEN"
import SEO from "../components/seo"
import GeneralComponent from "../components/generalNews/index.js"
import {Context, EN, ES} from "../lang/context"

const generalContainer = ({ data }) => {
  const lang = data.prismicComun.lang === "es-mx" ? ES : EN
  const Layout = data.prismicComun.lang === "es-mx" ? LayoutES : LayoutEN
  const title = data.prismicComun.data.title.text
  const description =
    data.prismicComun.data.metadescription.text ||
    data.prismicDatosComunes.data.metadescription.text
  const keywords =
    data.prismicComun.data.metakeywords.text ||
    data.prismicDatosComunes.data.metakeywords.text
  return (
    <Context.Provider value={lang}>

    <Layout>
      <SEO title={title} keywords={keywords} description={description} />
      <GeneralComponent data={data.prismicComun.data} />
    </Layout>
    </Context.Provider>
  )
}

export default generalContainer
export const pageQuery = graphql`
  query SingleGeneralPage($uid: String!, $lang: String!) {
    prismicComun(uid: { eq: $uid }, lang: { eq: $lang }) {
      uid
      lang
      data {
        title {
          text
        }
        content {
          html
        }
        metadescription {
          text
        }
        metakeywords {
          text
        }
      }
    }
    prismicDatosComunes(lang: { eq: $lang }) {
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
