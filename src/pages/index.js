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
        categories={common.categories}
        normalNotices={data.data.normalNotices}
        recentNotices={data.data.recentNotices}
        specialNotices={specialNotices}
        noticeP={common.principal_notices_active ? principalNotices : { nodes: [] }}
        site={data.data.site.siteMetadata}
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query HomeNoticeQuery {
    site {
      siteMetadata {
        API_KEY
        API_REF
        API_URL
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

        categories{
          category {
            id
            uid
            document{
              data{
                title{
                  text
                }
              }
            }
          }
          active
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
        principal_notices_active
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

  }
`

export default temp
