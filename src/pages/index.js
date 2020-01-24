import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContainer from "../containers/home.js"

const temp = data => {

  const common = data.data.prismicDatosComunes.data

  const specialNotices = data.data.specialNotices;

  const maxNumberOfPrincipalNews = 3
  const principalNotices = {
    nodes: common.principal_notices.reduce((notices, notice) => {
      if (notices.length < maxNumberOfPrincipalNews) {
        notices.push(notice.nodes.document[0]);
      }
      return notices;
    }, [])
  }

  const description = common.metadescription.text
  const keywords = common.metakeywords.text
  //console.log("BANNER ???", common.banner.document)
  return (
    <Layout>
      <SEO title="Home" description={description} keywords={keywords} />
      <HomeContainer
        bannerNotice={common.banner.document}
        normalNotices={data.data.normalNotices}
        recentNotices={data.data.recentNotices}
        specialNotices={specialNotices}
        noticeP={principalNotices}
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
            type
            data {
              custom_publishdate
              title {
                text
              }
              banner {
                url
                alt
                thumbnail {
                  alt
                  url
                }
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
        special_section {
          nodes {
            document {
              uid
              type
              data {
                title {
                  text
                }
                excerpt {
                  text
                }
                banner {
                  url
                  alt
                  thumbnail {
                    url
                    alt
                  }
                }
                custom_publishdate
                author {
                  name {
                    text
                  }
                }
              }
            }
          }
        }
        principal_notices {
          nodes {
            document {
              uid
              type
              data {
                title {
                  text
                }
                excerpt {
                  text
                }
                banner {
                  url
                  alt
                  thumbnail {
                    url
                    alt
                  }
                }
                content {
                  html
                }
                custom_publishdate
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
            alt
            thumbnail {
              alt
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
            alt
            thumbnail {
              url
              alt
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

    specialNotices: allPrismicNoticiasEspeciales(
      limit: 5
      sort: { fields: [data___custom_publishdate], order: [DESC] }
    ) {
      nodes {
        uid
        type
        data {
          title {
            text
          }
          banner {
            url
            alt
            thumbnail {
              url
              alt
            }
          }
          excerpt {
            text
          }
          author {
            name {
              text
            }
          }
          custom_publishdate
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
            alt
            thumbnail {
              url
              alt
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
            alt
            thumbnail {
              url
              alt
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
    allPrismicNoticiasEspeciales(
      limit: 5
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
              alt
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
            instagram {
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
