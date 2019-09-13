import styled from "styled-components"
import { Container } from "../../theme/index.styled"

const Footer = styled.footer`
  display: block;
  background-color: black;
  text-align: center;
  padding-left: ${props => props.theme.SidebarWidth}px;
  img {
    width: auto;
    max-width: 90%;
    margin: 10px 10px;
  }
  ${props => props.theme.smallBreakPoint} {
    padding-left: 0;
    img {
      width: 40%;
    }
  }
`
const Social = styled.a`
  position: relative;
  display: none;
  background-color: black;
  color: ${props => props.theme.White};
  width: 55px;
  height: 54px;
  text-decoration: none;
  border-radius: 50%;
  text-align: center;
  box-sizing: border-box;
  margin: 5px 16px;
  padding: 16px 0;
  font-size: 20px;
  ${props => props.theme.smallBreakPoint} {
    display: inline-block;
  }
`
const BlackContainer = styled(Container)`
  background-color: black;
  padding: 23px 0;
  max-width: 100% !important;
  img {
    vertical-align: middle;
  }
`

const YellowContainer = styled(Container)`
  display: none;
  background-color: ${props => props.theme.Yellow};
  padding: 23px 0;
  img {
    width: 198px;
    height: auto;
    margin: 15px auto 31px;
    display: block;
  }
  ${props => props.theme.smallBreakPoint} {
    display: block;
  }
`

export { Footer, Social, BlackContainer, YellowContainer }
