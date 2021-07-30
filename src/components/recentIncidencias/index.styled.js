import styled from "styled-components"
import {
  TitleMediumContainer,
  Section,
  Container,
  Col,
  YellowTitle,
} from "../../theme/index.styled"

const RecentSection = styled(Section)`
  padding: 35px 24px;
  background-color: white;
`

const CustomTitle = styled(YellowTitle)`
  width: auto;
  display: inline-block;
  a {
    margin-left: 40px;
  }
  ${props => props.theme.smallBreakPoint} {
    background-color: ${props => props.theme.Yellow};
    font-size: 30px;
    line-height: 34.5px;
    width: 100%;
    padding: 15px 31px;
    color: black;
    a {
      float: right;
      font-size: 15px;
      font-style: italic;
      color: ${props => props.theme.Black};
      text-decoration: underline;
    }
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
  flex-direction: column;
  img {
    margin: 0;
  }
  ${props => props.theme.xlBreakPoint} {
    img {
      padding: 0 0 !important;
    }
  }
`
// 205px
const NewsText = styled(Container)`
  max-width: 90%; 
  margin: 0;
  h3 {
    color: ${props => props.theme.Black};
    font-size: 19px;
    font-weight: bold;
    line-height: 1.16;
    text-align: left;
    margin-bottom: 15px;
  }
  h3 a {
    color: ${props => props.theme.Black};
    text-decoration: none;
  }
  p {
    color: ${props => props.theme.Black};
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
  color: ${props => props.theme.Black};
  line-height: 25px;
  line-height: 1.29;
  text-align: left;
  margin: 0;
  ${props => props.theme.xlBreakPoint} {
    color: ${props => props.theme.Black};
  }
`
const TextCol = styled(Col)`
  margin-top:20px;
  flex: 0 0 100%;
  max-width: 80%;
`
const ImgCol = styled(Col)`
  flex: 1;
  max-width: 100%;
  img {
    display: block;
    margin: 0 auto;
  }
  ${props => props.theme.smallBreakPoint} {
    flex: 1;
    max-width: 100%;
    
    img {
      height:280px;
      display: block;
      margin: 0 auto;
    }
  }
`

const YellowText = styled.span`
  ${props => props.theme.xlBreakPoint} {
    color: ${props => props.theme.Yellow};
  }
`
const HrCol = styled(Col)`
  padding-bottom: 20px;
  max-width:30%;
  border-bottom: 1px solid ${props => props.color};
  ${props => props.theme.smallBreakPoint} {
    max-width: 100%;
  }
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
