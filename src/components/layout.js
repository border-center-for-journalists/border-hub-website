/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"
import { Wrapper, Content } from "../theme/index.styled"
import Header from "./header"
import HeaderComponent from '../components/header/index.js'
import FooterComponent from '../components/footer/index.js'
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <ThemeProvider theme={Theme}>
          <Wrapper>
            <HeaderComponent siteTitle={data.site.siteMetadata.title} />
            <Content>
              {children}
            </Content>
            <FooterComponent />
          </Wrapper>
        </ThemeProvider>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
