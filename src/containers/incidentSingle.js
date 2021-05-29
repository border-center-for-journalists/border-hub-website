import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IncidentComponent from "../components/incident/single"

const IncidentSingleContainer = ({ location, data }) => {
  let getDescription = data => {
    if (data.metadescription.text) {
      return data.metadescription.text
    } else {
      return data.content.text.substring(0, 200)
    }
  }
  const image = data.prismicIncidencia.data.banner.url || false
  return (
    <Layout>
      <SEO
        title={data.prismicIncidencia.data.title.text}
        description={getDescription(data.prismicIncidencia.data)}
        keywords={data.prismicIncidencia.data.metakeywords.text || ""}
        image={image}
      />
      <IncidentComponent
        notice={data.prismicIncidencia}
        related={data.relatedNotes}
        site={data.site.siteMetadata}
        url={location.href}
      />
    </Layout>
  )
}

export default IncidentSingleContainer

export const pageQuery = graphql`
  query SingleIncidentQuery($uid: String!) {
    site {
      siteMetadata {
        API_KEY
        API_REF
        API_URL
      }
    }

    prismicIncidencia(uid: { eq: $uid }) {
      uid
      prismicId
      last_publication_date
      data {
        custom_publishdate
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
        organizaciones_participantes {
          image {
            url
          }
        }
        status {
          status_type
          status_description {
            text
          }
          from_date
          to_date
        }
      }
    }
  }
`
