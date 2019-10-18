if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: `${process.env.NODE_ENV}.env`,
  })
}

var PrismicDOM = require("prismic-dom")
var Elements = PrismicDOM.RichText.Elements

module.exports = {
  pathPrefix: "/gatsbyPrismic",
  siteMetadata: {
    title: `Border Hub Center`,
    description: ``,
    author: `@spaceshiplabs`,
    API_KEY: process.env.API_KEY,
    API_REF: process.env.API_REF,
    API_URL: process.env.API_URL,
    SITE_URL: process.env.SITE_URL || "",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: __dirname + "/src/theme/images",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/theme/images/gatsby-icon.png`, // This path is relative to the root of the site.
        icons: [],
      },
    },
    {
      //resolve: `gatsby-source-prismic`,
      resolve: `gatsby-source-prismic-rich-text-fields`,
      options: {
        repositoryName: `borderhub`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        forceRichTextFields: {
          document_type: "content",
        },
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          if (type === Elements.image) {
            return `IMG ${element.url},${element.alt} IMG`;
          }
          if (type === Elements.preformatted) {
            //console.log("element", element)
            return `${element.text}`
          }
          return null
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
