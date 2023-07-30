/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fs = require("fs")
const path = require("path")
const languages = require("./src/lang/index")

const getLangUrl = zone => languages.langsWithCode[zone]

const getLangSection = (zone, section) => {
  const lang = getLangUrl(zone)
  // must match src/lang/context
  const data = {
    "en": {
      to_category: 'category',
      to_recent_news: 'news',
      to_incidence: 'incidence',
      to_specials: 'special-news',
    },
    "es": {
      to_category: 'categoria',
      to_recent_news: 'noticias',
      to_incidence: 'incidencia',
      to_specials: 'noticias-especiales',
    }
  }

  return data[lang][section]
}

const getLangWithCode = langKey => {
  const l = {
    es: "es-mx",
    en: "en-us",
  }
  return l[langKey] ? l[langKey] : langKey
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage, createRedirect } = actions

  deletePage(page)

  const newContext = {
    ...page.context,
    lang: getLangWithCode(page.context.langKey),
  }

  createPage({
    ...page,
    context: newContext,
  })

  createRedirect({
    fromPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/es/`,
   })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      allPrismicNoticiasEspeciales {
        edges {
          node {
            uid
            prismicId
            lang
          }
        }
      }
      allPrismicNoticias {
        edges {
          node {
            uid
            prismicId
            lang
          }
        }
      }
      allPrismicComun {
        edges {
          node {
            uid
            prismicId
            lang
          }
        }
      }
      allPrismicCategorias {
        edges {
          node {
            uid
            prismicId
            lang
          }
        }
      }
      allPrismicIncidencia {
        edges {
          node {
            uid
            prismicId
            lang
          }
        }
      }
    }
  `)

  const specialNote = path.resolve("src/containers/specialnote.js")

  pages.data.allPrismicNoticiasEspeciales.edges.forEach(edge => {
    createPage({
      path: `${getLangUrl(edge.node.lang)}/${getLangSection(
        edge.node.lang,
        "to_specials"
      )}/${edge.node.uid}/`,
      component: specialNote,
      context: {
        uid: edge.node.uid,
        lang: edge.node.lang,
        prismicId: edge.node.prismicId,
      },
    })
  })

  const normalNote = path.resolve("src/containers/normalNote.js")

  pages.data.allPrismicNoticias.edges.forEach(edge => {
    createPage({
      path: `${getLangUrl(edge.node.lang)}/${getLangSection(
        edge.node.lang,
        "to_recent_news"
      )}/${edge.node.uid}/`,
      component: normalNote,
      context: {
        uid: edge.node.uid,
        lang: edge.node.lang,
        prismicId: edge.node.prismicId,
      },
    })
  })

  const category = path.resolve("src/containers/category.js")

  pages.data.allPrismicCategorias.edges.forEach(edge => {
    createPage({
      path: `${getLangUrl(edge.node.lang)}/${getLangSection(
        edge.node.lang,
        "to_category"
      )}/${edge.node.uid}/`,
      component: category,
      context: {
        uid: edge.node.uid,
        lang: edge.node.lang,
        prismicId: edge.node.prismicId,
      },
    })
  })

  const IncidenciaTemplate = path.resolve("src/containers/incidentSingle.js")
  pages.data.allPrismicIncidencia.edges.forEach(edge => {
    createPage({
      path: `${getLangUrl(edge.node.lang)}/${getLangSection(
        edge.node.lang,
        "to_incidence"
      )}/${edge.node.uid}/`,
      component: IncidenciaTemplate,
      context: {
        uid: edge.node.uid,
        lang: edge.node.lang,
        prismicId: edge.node.prismicId,
      },
    })
  })
  const general = path.resolve("src/containers/general.js")

  pages.data.allPrismicComun.edges.forEach(edge => {
    createPage({
      path: `${getLangUrl(edge.node.lang)}/${edge.node.uid}/`,
      component: general,
      context: {
        uid: edge.node.uid,
        lang: edge.node.lang,
        prismicId: edge.node.prismicId,
      },
    })
  })

  const adsTxtSrc = path.join(__dirname, "ads.txt")
  const adsTxtDest = path.join(__dirname, "public", "ads.txt")
  fs.copyFileSync(adsTxtSrc, adsTxtDest)
}
