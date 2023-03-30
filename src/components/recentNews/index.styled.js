import styled from "styled-components"
import {
  TitleMediumContainer,
  Section,
  Container,
  Col,
} from "../../theme/index.styled"

const RecentSection = styled(Section)`
  padding: 35px 24px;
  background-color: black;
`
const CustomTitle = styled(TitleMediumContainer)`
  padding-top: 39px;
  max-width: 1100px;
  h2 {
    font-size: 30px;
    line-height: 1.22;
  }
  a {
    float: right;
    font-size: 15px;
    font-style: italic;
    color: ${props => props.theme.Yellow};
    padding: 12px 0;
  }
  background-color: black;

  ${props => props.theme.smallBreakPoint} {
    padding: 2em 0;
  }
`
const PrincipalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${props => props.theme.ipadBreakPoint} {
    margin: 0 auto;
  }
  ${props => props.theme.largeBreakPoint} {
    max-width: ${props => props.theme.ContainerExtraLarge + 30}px;
  }
`

const NewsContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1em;
  flex-direction: row;
  img {
    margin: 0;
  }
  ${props => props.theme.xlBreakPoint} {
    img {
      padding: 0 0 1em 1em !important;
    }
  }
`

const NewsText = styled(Container)`
  max-width: 205px;
  margin: 0;
  h3 {
    color: ${props => props.theme.White};
    font-size: 19px;
    font-weight: bold;
    line-height: 1.16;
    text-align: left;
    margin-bottom: 15px;
  }
  h3 a {
    color: ${props => props.theme.White};
    text-decoration: none;
  }
  p {
    color: ${props => props.theme.White};
    text-align: left;
    font-size: 16px;
    line-height: 1.44;
    margin-bottom: 15px;
  }

  ${props => props.theme.xlBreakPoint} {
    p {
      display: none;
    }
  }
`

const DateText = styled.p`
  font-size: 15.5px;
  color: ${props => props.theme.DarkYellow};
  line-height: 25px;
  line-height: 1.29;
  text-align: left;
  margin: 0;
  ${props => props.theme.xlBreakPoint} {
    color: ${props => props.theme.White};
  }
`
const TextCol = styled(Col)`
  flex: 0 0 40%;
  max-width: 40%;
  ${props => props.theme.smallBreakPoint} {
    flex: 0 0 50%;
    max-width: 50%;
  }
`
const ImgCol = styled(Col)`
  flex: 0 0 60%;
  max-width: 60%;
  img {
    width: 200px;
    display: block;
    margin: 0 auto;
  }
  ${props => props.theme.smallBreakPoint} {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
`

const YellowText = styled.span`
  ${props => props.theme.xlBreakPoint} {
    color: ${props => props.theme.Yellow};
  }
`
const HrCol = styled(Col)`
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.color};
`

export {
  CustomTitle,
  NewsContainer,
  NewsText,
  PrincipalContainer,
  DateText,
  RecentSection,
  ImgCol,
  TextCol,
  YellowText,
  HrCol,
}
