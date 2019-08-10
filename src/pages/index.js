import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeContainer from "../containers/home.js"

  const temp = (data)=>{
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {console.log("home", data.data.allPrismicNoticias)}
      <HomeContainer noticeP={data.data.allPrismicNoticias} noticeS={data.data.allPrismicNoticiasEspeciales}/>
    </Layout>
  )
  }
export const pageQuery = graphql`
  query HomeNoticeQuery {
    allPrismicNoticias{
      nodes{
        data{
          custom_publishdate
          type
          banner{url}
          title{
            text
          }
          content{
            html
          }
          excerpt{
            text
          }
          author{
            name{
              text
            }
          }
        }
      }
    }
    allPrismicNoticiasEspeciales{
      nodes{
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