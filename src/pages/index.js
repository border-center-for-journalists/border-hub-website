import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContainer from "../containers/home.js"

const temp = data => {
  const common = data.data.prismicDatosComunes.data
  const description = common.metadescription.text
  const keywords = common.metakeywords.text
  console.log("BANNER ???", common.banner.document)
  return (
    <Layout>
      <SEO title="Home" description={description} keywords={keywords} />
      <HomeContainer
        bannerNotice={common.banner.document}
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
    prismicDatosComunes {
      data {
        metadescription {
          text
        }
        metakeywords {
          text
        }
        banner {
          document {
            uid
            data {
              custom_publishdate
              title {
                text
              }
              banner {
                url
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
      }
    }
    bannerNotice: allPrismicNoticias(
      limit: 1
      filter: { data: { type: { eq: "banner" } } }
      sort: { fields: [data___custom_publishdate], order: [DESC] }
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
      sort: { fields: [data___custom_publishdate], order: [DESC] }
    ) {
      nodes {
        uid
        data {
          custom_publishdate
          type
          banner {
            url
            thumbnail {
              url
            }
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
    recentNotices: allPrismicNoticias(
      limit: 8
      sort: { fields: [data___custom_publishdate], order: [DESC] }
    ) {
      nodes {
        uid
        data {
          custom_publishdate
          type
          banner {
            url
            thumbnail {
              url
            }
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
    allPrismicNoticias(
      sort: { fields: [data___custom_publishdate], order: [DESC] }
    ) {
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
    allPrismicNoticiasEspeciales(
      limit: 1
      sort: { fields: [data___custom_publishdate], order: [DESC] }
    ) {
      nodes {
        uid
        data {
          title {
            text
          }
          banner {
            url
            alt
            thumbnail {
              url
            }
          }
          excerpt {
            text
          }
          author {
            user_picture {
              url
            }
            name {
              text
            }
            author_rol {
              text
            }
            email {
              text
            }
            facebook {
              text
            }
            twitter {
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
