import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SpecialNoticeComponent from "../components/notice/special"

const SpecialNoticeContainer = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.prismicNoticiasEspeciales.data.title.text}
        keywords={[]}
      />
      <SpecialNoticeComponent notice={data.prismicNoticiasEspeciales} />
    </Layout>
  )
}

export default SpecialNoticeContainer

export const pageQuery = graphql`
  query SingleSpecialNoticeQuery($uid: String!) {
    prismicNoticiasEspeciales(uid: { eq: $uid }) {
      uid
      last_publication_date
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
