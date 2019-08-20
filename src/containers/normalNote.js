import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NormalNoticeComponent from "../components/notice/normal"

const NormalNoticeContainer = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.prismicNoticias.data.title.text} keywords={[]} />
      <NormalNoticeComponent
        notice={data.prismicNoticias}
        related={data.relatedNotes}
      />
    </Layout>
  )
}

export default NormalNoticeContainer

export const pageQuery = graphql`
  query SingleNormalNoticeQuery($uid: String!, $prismicId: String!) {
    prismicNoticias(uid: { eq: $uid }) {
      uid
      last_publication_date
      data {
        custom_publishdate
        type
        banner {
          url
        }
        title {
          text
        }
        content {
          html
        }
        excerpt {
          text
        }
        alliance_name {
          text
        }
        alliance_link {
          url
        }
        author {
          name {
            text
          }
          email {
            text
          }
          user_picture {
            url
          }
          twitter {
            text
          }
          facebook {
            text
          }
        }
      }
    }
    relatedNotes: allPrismicNoticias {
      uid
      last_publication_date
      data {
        custom_publishdate
        title {
          text
        }
      }
    }
  }
`
