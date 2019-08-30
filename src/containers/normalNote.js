import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NormalNoticeComponent from "../components/notice/normal"

const NormalNoticeContainer = ({ location, data }) => {
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
    <Layout>
      <SEO title={data.prismicNoticias.data.title.text} description={getDescription(data.prismicNoticias.data)} keywords={[data.prismicNoticias.data.metakeywords.text]} />
      <NormalNoticeComponent
        notice={data.prismicNoticias}
        related={data.relatedNotes}
        site={data.site.siteMetadata}
        url={location.href}
      />
    </Layout>
  )
}

export default NormalNoticeContainer

export const pageQuery = graphql`
  query SingleNormalNoticeQuery($uid: String!) {
    site {
      siteMetadata {
        API_KEY
        API_REF
        API_URL
      }
    }

    prismicNoticias(uid: { eq: $uid }) {
      uid
      prismicId
      last_publication_date
      data {
        custom_publishdate
        type
        metadescription{
          text
        }
        metakeywords{
          text
        }
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
        alliance_name {
          text
        }
        alliance_link {
          url
        }
        author {
          name {
            text
          }
          email {
            text
          }
          user_picture {
            url
          }
          twitter {
            text
          }
          facebook {
            text
          }
        }
      }
    }
  }
`
