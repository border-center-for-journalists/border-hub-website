import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SpecialNoticeComponent from "../components/notice/special"

const SpecialNoticeContainer = ({ location, data }) => {
  let getDescription = data => {
    if (data.metadescription.text) {
      return data.metadescription.text
    } else {
      return false
    }
  }
  const notice = data.prismicNoticiasEspeciales
  const common = data.prismicDatosComunes.data
  const description =
    getDescription(notice.data) || common.metadescription.text || ""
  const keywords =
    notice.data.metakeywords.text || common.metakeywords.text || ""
  const image = notice.data.banner.url || false
  return (
    <Layout minify>
      <SEO
        title={notice.data.title.text}
        description={description}
        keywords={keywords}
        image={image}
      />
      <SpecialNoticeComponent
        notice={notice}
        related={data.relatedNotes}
        site={data.site.siteMetadata}
        url={location.href}
      />
    </Layout>
  )
}

export default SpecialNoticeContainer

export const pageQuery = graphql`
  query SingleSpecialNoticeQuery($uid: String!) {
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
    site {
      siteMetadata {
        API_KEY
        API_REF
        API_URL
      }
    }
    prismicNoticiasEspeciales(uid: { eq: $uid }) {
      uid
      prismicId
      last_publication_date
      data {
        title {
          text
        }
        metadescription {
          text
        }
        metakeywords {
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
        body {
          __typename
          ... on PrismicNoticiasEspecialesBodyTexto {
            slice_type
            primary {
              content {
                html
              }
            }
          }
          ... on PrismicNoticiasEspecialesBodyCitado {
            slice_type
            primary {
              content {
                html
              }
            }
          }
          ... on PrismicNoticiasEspecialesBodyBloque {
            slice_type
            items {
              content {
                html
              }
            }
          }
          ... on PrismicNoticiasEspecialesBodyMultimedia {
            slice_type
            primary {
              embed {
                html
              }
              embed_type
            }
          }
          ... on PrismicNoticiasEspecialesBodyGraficas {
            slice_type
            primary {
              chart_title {
                text
              }
              axis_x {
                text
              }
              eje_y {
                text
              }
            }
            items {
              section {
                text
              }
              values {
                text
              }
            }
          }
          ... on PrismicNoticiasEspecialesBodyGraficaDeBarras {
            slice_type
            primary {
              chart_title {
                text
              }
              axis_x {
                text
              }
              eje_y {
                text
              }
            }
            items {
              section {
                text
              }
              values {
                text
              }
            }
          }
          ... on PrismicNoticiasEspecialesBodyGraficaDePay {
            slice_type
            primary {
              chart_title {
                text
              }
              axis_x {
                text
              }
              eje_y {
                text
              }
              values {
                text
              }
            }
          }
        }
      }
    }
  }
`
