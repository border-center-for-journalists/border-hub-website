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
            prismicId
          }
        }
      }
      allPrismicNoticias {
        edges {
          node {
            uid
            prismicId
          }
        }
      }
      allPrismicComun {
        edges {
          node {
            uid
            prismicId
          }
        }
      }
      allPrismicCategorias {
        edges{
          node{
            uid
            prismicId
          }
        }
      }
      allPrismicIncidencia {
        edges{
          node{
            uid
            prismicId
          }
        }
      }
    }
  `)

  const specialNote = path.resolve("src/containers/specialnote.js")
  const { SPECIAL_NEWS_URL, NEWS_URL } = require('./src/utils/constants');

  pages.data.allPrismicNoticiasEspeciales.edges.forEach(edge => {
    createPage({
      path: `/${SPECIAL_NEWS_URL}/${edge.node.uid}/`,
      component: specialNote,
      context: {
        uid: edge.node.uid,
        prismicId: edge.node.prismicId,
      },
    })
  })

  const normalNote = path.resolve("src/containers/normalNote.js")

  pages.data.allPrismicNoticias.edges.forEach(edge => {
    createPage({
      path: `/${NEWS_URL}/${edge.node.uid}/`,
      component: normalNote,
      context: {
        uid: edge.node.uid,
        prismicId: edge.node.prismicId,
      },
    })
  })

  const category = path.resolve("src/containers/category.js")

  pages.data.allPrismicCategorias.edges.forEach(edge => {
    createPage({
      path: `/categoria/${edge.node.uid}/`,
      component: category,
      context: {
        uid: edge.node.uid,
        prismicId: edge.node.prismicId,
      },
    })
  })

  const IncidenciaTemplate = path.resolve("src/containers/incidentSingle.js")
  pages.data.allPrismicIncidencia.edges.forEach(edge => {
    createPage({
      path: `/incidencias/${edge.node.uid}/`,
      component: IncidenciaTemplate,
      context: {
        uid: edge.node.uid,
        prismicId: edge.node.prismicId,
      },
    })
  })
  const general = path.resolve("src/containers/general.js")

  pages.data.allPrismicComun.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}/`,
      component: general,
      context: {
        uid: edge.node.uid,
        prismicId: edge.node.prismicId,
      },
    })
  })

}
