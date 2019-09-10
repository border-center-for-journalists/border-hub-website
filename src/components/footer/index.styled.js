import styled from "styled-components";
import { Container } from "../../theme/index.styled"

const Footer = styled.footer`
  display: block;
  text-align: center;
  img {
    height: 60px;
    width: auto;
    max-width: 90%;
    margin: 10px 10px;
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
    display: inline-block
  } 
`
const BlackContainer = styled(Container) `
  background-color:black;
  padding: 23px 0;
`

const YellowContainer = styled(Container)`
  display:none;
  background-color: ${props => props.theme.Yellow};
  padding: 23px 0;
  ${props => props.theme.smallBreakPoint} {
    display: block
  } 
`

export { Footer, Social, BlackContainer, YellowContainer }
