import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContainer from "../containers/home.js"

const temp = data => {

  const common = data.data.prismicDatosComunes.data

  const specialNotices = data.data.specialNotices;

  const maxNumberOfPrincipalNews = 3
  const principalSpecialNotices = {
    nodes: common.noticias_principales_especiales.reduce((notices, notice) => {
      if (notices.length < maxNumberOfPrincipalNews) {
        notices.push(notice.nodes.document[0]);
      }
      return notices;
    }, [])

  }
  const principalNormalNotices = {
    nodes: common.principal_notices.reduce((notices, notice) => {
      if (notices.length < maxNumberOfPrincipalNews) {
        notices.push(notice.nodes.document[0]);
      }
      return notices;
    }, [])
  }
  const principalNotices = { nodes: [...principalSpecialNotices.nodes, ...principalNormalNotices.nodes] }

  const description = common.metadescription.text
  const keywords = common.metakeywords.text
  //console.log("BANNER ???", common.banner.document)
  return (
    <Layout>
      <SEO title="Border Hub: Periodismo de Investigación de la Frontera Norte" description={description} keywords={keywords} />
      <HomeContainer
        showBanner={common.show_banner}
        bannerNotice={common.banner.document}
        categories={common.categories}
        normalNotices={data.data.normalNotices}
        recentNotices={data.data.recentNotices}
        specialNotices={specialNotices}
        noticeP={common.principal_notices_active ? principalNotices : { nodes: [] }}
        site={data.data.site.siteMetadata}
        recentIncidencias={data.data.recentIncidencias}
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
        show_banner
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
        noticias_principales_especiales {
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
    recentIncidencias: allPrismicIncidencia(
      limit: 3
      sort: { fields: [data___custom_publishdate], order: [DESC] }
    )  {
        nodes{
          uid
          prismicId
          data {
            custom_publishdate
            title {
              text
            }
            banner{
              url
              alt
              thumbnail
              {
              	url
              	alt  
              }
            }
          }
        }
    }
  }
`

export default temp

/*
... on PrismicNoticias {
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
 */