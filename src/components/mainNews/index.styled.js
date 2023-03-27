import styled from "styled-components"
import {
  Section,
  Container,
  Paragraph,
} from "../../theme/index.styled"

const NewsContainer = styled(Section)`
  background-color: white;
  padding: 36px;
  margin: 0 auto;
  max-width: 1000px;

  ${props => props.theme.mediumBreakPoint} {
    max-width: 700px;
  }

  ${props => props.theme.ipadBreakPoint} {
    padding: 2em 24px 0 24px;
  }

  ${props => props.theme.xlBreakPoint} {
    padding: 0;
  }
`
const MainNewBig = styled(Container)`
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  h2 {
    text-align: left;
    color: ${props => props.theme.Black};
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 15px;
    font-weight: bold;
  }
  h1 a {
    color: ${props => props.theme.Black};
    text-decoration: none;
  }
`
const TextContainer = styled(Container)`
  max-width: 100%;
  ${props => props.theme.xlBreakPoint} {
    padding: 0 1.5em;
  }
`

const SubTitleParagraph = styled(Paragraph)`
  font-size: 17px;
  line-height: 1.35;
  ${props => props.theme.smallBreakPoint} {
    display: none;
  }
`

const MainNewSmall = styled(Container)`
  max-width: 100%;
  padding: 15px 0 0 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  hr {
    width: 100%;
    color: ${props => props.theme.DarkGray};
  }
  img {
    margin: 0;
  }
  ${props => props.theme.xlBreakPoint} {
    padding: 0 24px;
  }
`

const MainNewSmallText = styled(Container)`
  padding-left: 30px;
  * {
    color: ${props =>
      props.darkMode === true ? props.theme.White : props.theme.Black};
  }
  h3 {
    color: ${props =>
      props.darkMode === true ? props.theme.White : props.theme.Black};
    font-size: 24px;
    line-height: 1.47;
    text-align: left;
    margin-bottom: 5px;
  }
  a {
    color: ${props =>
      props.darkMode === true ? props.theme.White : props.theme.Black};
    text-decoration: none;
  }
  p {
    color: ${props =>
      props.darkMode === true ? props.theme.White : props.theme.Black};
    text-align: left;
    font-size: 17px;
    margin-bottom: 15px;
  }
  ${props => props.theme.smallBreakPoint} {
    padding-left: 0px;
  }

`
const MobileParagraph = styled(Paragraph)`
  ${props => props.theme.smallBreakPoint} {
    display: none;
  }
`

export {
  NewsContainer,
  MainNewBig,
  SubTitleParagraph,
  MainNewSmall,
  MainNewSmallText,
  TextContainer,
  MobileParagraph,
}
