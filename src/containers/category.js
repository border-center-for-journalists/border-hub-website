import React from "react"
import { graphql } from "gatsby"
import LayoutES from "../components/layoutES"
import LayoutEN from "../components/layoutEN"
import SEO from "../components/seo"
import BlogContainer from "../containers/blog.js"
import {Context, EN, ES} from "../lang/context"

const Category = data => {
  const lang = data.data.prismicDatosComunes.lang === "es-mx" ? ES : EN
  const Layout = data.data.prismicDatosComunes.lang === "es-mx" ? LayoutES : LayoutEN
  const common = data.data.prismicDatosComunes.data
  const description = common.metadescription.text
  const keywords = common.metakeywords.text
  const category = data.data.prismicCategorias

  return (
    <Context.Provider value={lang}>
      <Layout>
        <SEO title="Blog | " description={description} keywords={keywords} />
        <BlogContainer
          darkMode={false}
          site={data.data.site.siteMetadata}
          category={category}
        />
      </Layout>
    </Context.Provider>
  )
}
export const pageQuery = graphql`
  query blogCategoryQuery($uid: String!, $lang: String!) {
    site {
      siteMetadata {
        API_KEY
        API_REF
        API_URL
      }
    }
    prismicCategorias(uid: { eq: $uid }, lang: { eq: $lang }){
      uid
      lang
      prismicId
      data{
        title{
          text
        }
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

export default Category
