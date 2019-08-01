import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NormalNoticeComponent from "../components/notice/normal"

const NormalNoticeContainer = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Nota especial"
        keywords={[`gatsby`, `application`, `react`]}
      />
      {console.log("primero",data)}
      <NormalNoticeComponent notice={data.prismicNoticias}/>
    </Layout>
  )
}

export default NormalNoticeContainer

export const pageQuery = graphql` 
query SingleNormalNoticeQuery($uid: String!){
  prismicNoticias(uid: { eq: $uid }){
    uid
    last_publication_date
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
        alliance_name{
          text
        }
         alliance_link{
          url
        }
        author{
          name{
            text
          }
          email{
            text
          }
          user_picture{
            url
          }
          twitter{
            text
          }
          facebook{
            text
          }
        }
      }
    }
}
` 