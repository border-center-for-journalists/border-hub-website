/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      allPrismicNoticiasEspeciales {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicNoticias {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicComun {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const specialNote = path.resolve("src/containers/specialnote.js")

  pages.data.allPrismicNoticiasEspeciales.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: specialNote,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  const normalNote = path.resolve("src/containers/normalNote.js")

  pages.data.allPrismicNoticias.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: normalNote,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  const general = path.resolve("src/containers/general.js")

  pages.data.allPrismicComun.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: general,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
