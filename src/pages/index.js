import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContainer from "../containers/home.js"

const temp = data => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {console.log("home", data.data.allPrismicNoticias)}
      <HomeContainer
        bannerNotice={data.data.bannerNotice}
        normalNotices={data.data.normalNotices}
        recentNotices={data.data.recentNotices}
        noticeP={data.data.allPrismicNoticias}
        noticeS={data.data.allPrismicNoticiasEspeciales}
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query HomeNoticeQuery {
    bannerNotice: allPrismicNoticias(
      limit: 1
      filter: { data: { type: { eq: "banner" } } }
    ) {
      nodes {
        uid
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
          author {
            name {
              text
            }
          }
        }
      }
    }
    normalNotices: allPrismicNoticias(
      limit: 3
      filter: { data: { type: { eq: "normal" } } }
    ) {
      nodes {
        uid
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
          author {
            name {
              text
            }
          }
        }
      }
    }
    recentNotices: allPrismicNoticias(limit: 8) {
      nodes {
        uid
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
          author {
            name {
              text
            }
          }
        }
      }
    }
    allPrismicNoticias {
      nodes {
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
          author {
            name {
              text
            }
          }
        }
      }
    }
    allPrismicNoticiasEspeciales(limit: 1) {
      nodes {
        data {
          title {
            text
          }
          banner {
            url
            alt
          }
          authors {
            author_profile {
              url
            }
            author_name {
              text
            }
            author_rol {
              text
            }
            author_email {
              text
            }
            author_facebook {
              text
            }
            author_twitter {
              text
            }
          }
          alliances {
            alliance_image {
              url
              alt
            }
            alliance_url {
              url
            }
          }
        }
      }
    }
  }
`

export default temp
