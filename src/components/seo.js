/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../../static/favicon.ico"
const defaultImage = require("../theme/images/periodistas.png")

function SEO({ description, lang, meta, keywords, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            SITE_URL
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title.includes('Border Hub') ? `%s` : `%s | Border Hub: Periodismo de Investigación`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${image ? "" : site.siteMetadata.SITE_URL}${image ||
            defaultImage}`,
        },
        {
          name: 'google-site-verification',
          content: "HrwbMkjubcvAKPVRhr8uzSs1BRZB9jVjzwnHH6zXGr8"
        }
      ]
        .concat(
          keywords.length > 0
            ? {
              name: `keywords`,
              content: keywords,
            }
            : []
        )
        .concat(meta)}
      link={[
        { rel: "icon", type: "image/ico", href: `${favicon}` },
        { rel: "shortcut icon", type: "image/ico", href: `${favicon}` },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Aleo:300,400,400i,700&display=swap"
        rel="stylesheet"
      />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149565112-1"></script>

      <script>
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());  
          
          gtag('config', 'UA-149565112-1');
          `
        }
      </script>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4407224989610340"
     crossorigin="anonymous"></script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `ES-MX`,
  meta: [
    { name: `author`, content: `Border Hub` },
    { name: `publisher`, content: `Border Hub` },
    { name: `robots`, content: `INDEX` },
  ],
  keywords: [],
  description: ``,
  image: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default SEO
