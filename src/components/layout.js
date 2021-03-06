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
import "../theme/icons.css"

function Layout({ children, minify }) {
  //console.log("minify", minify || false)
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
        <HeaderComponent minify={minify} />
        <SidebarComponent minify={minify} data={prismicDatosComunes.data} />
        <Content minify={minify}>{children}</Content>
        <FooterComponent data={prismicDatosComunes.data} />
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
