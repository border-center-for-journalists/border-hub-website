import React from "react"
import { graphql } from "gatsby"
import LayoutES from "../components/layoutES"
import LayoutEN from "../components/layoutEN"
import SEO from "../components/seo"
import NormalNoticeComponent from "../components/notice/normal"
import {Context, EN, ES} from "../lang/context"

const NormalNoticeContainer = ({ location, data }) => {
  const lang = data.prismicNoticias.lang === "es-mx" ? ES : EN
  const Layout = data.prismicNoticias.lang === "es-mx" ? LayoutES : LayoutEN
  let getDescription = data => {
    if (data.metadescription.text) {
      return data.metadescription.text
    } else {
      return data.content.text.substring(0, 200)
    }
  }
  const image = data.prismicNoticias.data.banner.url || false
  return (
    <Context.Provider value={lang}>
      <Layout>
        <SEO
          title={data.prismicNoticias.data.title.text}
          description={getDescription(data.prismicNoticias.data)}
          keywords={data.prismicNoticias.data.metakeywords.text || ""}
          image={image}
        />
        <NormalNoticeComponent
          notice={data.prismicNoticias}
          related={data.relatedNotes}
          site={data.site.siteMetadata}
          url={location.href}
        />
      </Layout>
    </Context.Provider>
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
      lang
      prismicId
      last_publication_date
      data {
        custom_publishdate
        type
        metadescription {
          text
        }
        metakeywords {
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
          text
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
          instagram {
            text
          }
        }
      }
    }
  }
`
