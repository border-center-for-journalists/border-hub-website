import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SpecialNoticeComponent from "../components/notice/special"

const SpecialNoticeContainer = ({ location, data }) => {
  {console.log("datos",data.prismicNoticiasEspeciales.data)}
  let getDescription = data => {
    if(data.metadescription.text){
       return data.metadescription.text
    }
    else{
     let content = data.content.html
     let div = document.createElement("div");
     div.innerHTML = content;
     let text = div.innerText;
     text = "<p>" + text.substring(0, 200) + "</p>";
     return text
    }
 }
  return (
    <Layout minify>
      <SEO
        title={data.prismicNoticiasEspeciales.data.title.text}
        description={getDescription(data.prismicNoticiasEspeciales.data)} 
        keywords={[data.prismicNoticiasEspeciales.data.metakeywords.text]}
      />
      <SpecialNoticeComponent
        notice={data.prismicNoticiasEspeciales}
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
        metadescription{
          text
        }
        metakeywords{
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
