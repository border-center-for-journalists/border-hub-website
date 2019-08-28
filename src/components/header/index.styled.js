import styled from "styled-components"

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: ${props => props.theme.SidebarWidth}px;
  padding-left: ${props => props.theme.SidebarWidth}px;
  transition: padding 0.5s;
  box-sizing: border-box;
  top: 0;
  left: 0;
  z-index: 100;
  text-align: ${props => (props.minify ? "center" : "left")};
  ${props => props.theme.largeBreakPoint} {
    height: ${props => props.theme.SidebarWidth2x}px;
    padding-left: ${props => props.theme.SidebarWidth2x}px;
  }
`

const Logo = styled.a`
  display: inline-block;
  height: 100%;
  padding: ${props => (props.minify ? "15px" : "0")};
  img {
    transition: height 0.5s;
    height: ${props => props.theme.SidebarWidth}px;
    height: 100%;
    ${props => props.theme.largeBreakPoint} {
      height: ${props => props.theme.SidebarWidth2x}px;
      height: 100%;
    }
  }
  ${props => props.theme.smallBreakPoint} {
    overflow: hidden;
  }
`

export { Header, Logo }
