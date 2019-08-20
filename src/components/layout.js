/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"
import { Wrapper, Content } from "../theme/index.styled"
import HeaderComponent from "../components/header/index.js"
import FooterComponent from "../components/footer/index.js"
import SidebarComponent from "../components/sidebar/index"
import "./layout.css"
<<<<<<< HEAD
import "../theme/style.css"
=======
import "../theme/icons.css"
>>>>>>> 7bed148e4811b0d86efb07300b18a5b6339e6a98

function Layout({ children }) {
  const { prismicDatosComunes } = useStaticQuery(graphql`
    query SidebarQuery {
      prismicDatosComunes {
        data {
          facebook {
            url
          }
          twitter {
            url
          }
          youtube {
            url
          }
          menu {
            item_name {
              text
            }
            item_link {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <HeaderComponent />
        <SidebarComponent data={prismicDatosComunes.data} />
        <Content>{children}</Content>
        <FooterComponent />
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
