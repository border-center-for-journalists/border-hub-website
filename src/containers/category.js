import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContainer from "../containers/blog.js"

const Category = data => {
  const common = data.data.prismicDatosComunes.data
  const description = common.metadescription.text
  const keywords = common.metakeywords.text
  const category = data.data.prismicCategorias

  return (
    <Layout>
      <SEO title="Blog | " description={description} keywords={keywords} />
      <BlogContainer
        darkMode={false}
        site={data.data.site.siteMetadata}
        category={category}
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogCategoryQuery($uid: String!) {
    site {
      siteMetadata {
        API_KEY
        API_REF
        API_URL
      }
    }
    prismicCategorias(uid: { eq: $uid }){
      uid
      prismicId
      data{
        title{
          text
        }
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

export default Category
