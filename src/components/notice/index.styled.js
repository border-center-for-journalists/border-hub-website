import styled from "styled-components"
import { Container, Row } from "../../theme/index.styled"

const NoticeSection = styled.section`
  padding-top: 120px;
  background-color: ${props => (props.color ? props.color : props.theme.Black)};
  img {
    margin: 0;
  }
`

const NormalNoticeContainer = styled.div`
  widht: 100%;
  height: 100%;
  background-color: ${props => props.theme.White};
`

const VerticalNotice = styled.div`
  color: ${props => props.theme.White};
  background-color: #000;
  .image {
    position: relative;
    display: block;
  }
  .image::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 30%, black);
    z-index: 2;
  }
  img {
    display: block;
    width: 100%;
    position: relative;
    z-index: 0;
  }
  .text-wrapper {
    padding: 15px 20px;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 5px;
  }
  h4 {
    font-size: 18px;
    margin-bottom: 15px;
  }
  a {
    color: ${props => props.theme.White};
    text-decoration: none;
  }
  .excerpt {
    padding: 15px 0;
    border-top: 5px solid ${props => props.theme.Yellow};
    font-size: 14px;
  }
  .yellow-text {
    color: ${props => props.theme.Yellow};
    font-size: 14px;
    p {
      margin: 0;
    }
  }
`

const YellowContainer = styled(Container)`
  background-color: ${props => props.theme.Yellow};
  padding: 0 1em;
`

const CustomRow = styled(Row)``

const DonateContainer = styled(Container)`
  background-color: black;
  padding: 45px 45px;
  margin: 0 auto 45px;
  text-align: center;
  i {
    font-size: 50px;
    color: ${props => props.theme.Yellow};
  }
  p {
    color: white;
  }
  h2 {
    color: white;
  }
  button {
    background-color: ${props => props.theme.Yellow};
    color: black;
    cursor: pointer;
    border: none;
    width: 236px;
    height: 40px;
    display: block;
    margin: 1.23em auto 0;
    font-size: 19.5px;
    line-height: 1.44;
    font-weight: bold;
  }
`

const MainNewSmall = styled.div`
  padding: 15px 15px;
  display: flex;
  flex-wrap: wrap;
  img {
    margin: 0;
  }
`

const MainNewSmallText = styled.div`
  padding-left: 30px;

  h3 {
    color: ${props =>
      props.color === "black" ? props.theme.Black : props.theme.White};
    font-size: 19px;
    line-height: 25px;
    text-align: left;
    margin-bottom: 10px;
  }
  h3 a {
    text-decoration: none;
    color: ${props =>
      props.color === "black" ? props.theme.Black : props.theme.White};
  }
  p {
    color: ${props =>
      props.color === "black" ? props.theme.Black : props.theme.White};
    text-align: left;
  }
`

const Divider = styled.hr`
  margin: 30px 10px;
  border: 0 none;
  border-top: 1px solid ${props => props.theme.DarkGray};
`

const NoticeTitleWrapper = styled.div`
  display: block;
  text-align: ${props => (props.align ? props.align : "center")};
  color: white;
  p {
    font-size: 15px;
    line-height: 1.67;
    margin: 0;
  }
  h1 {
    color: white;
    font-size: 39px;
    font-size: ${props =>
      props.align && props.align === "center" ? "42px" : "39px"};
    margin-bottom: 5px;
  }
  hr {
    border: 0 none;
    border: 0 none;
    border-top: 4px solid ${props => props.theme.Yellow};
    margin-top: 10px;
    margin-bottom: 5px;
  }
  ${props => props.theme.smallBreakPoint} {
    padding: 0px 24px;
    h1 {
      font-size: 30px;
    }
  }
`

const Share = styled.a`
  margin-left: 20px;
  color: white;
  font-size: 20px;
  padding: 5px;
`

const YellowText = styled.span`
  color: ${props => props.theme.Yellow};
`

const NoticeSectionTitle = styled.h4`
  color: ${props => (props.color ? props.color : "white")};
  font-size: 23px;
  margin-bottom: 25px;
  text-align: ${props => (props.align ? props.align : "center")};
  ${props => props.theme.smallBreakPoint} {
    padding: 0 15px;
  }
`

const Author = styled.div`
  flex: ${props => (props.color == "black" ? "0 0 50%" : "0 1 32%")};
  flex: 1 0 auto;
  max-width: ${props => (props.align === "left" ? "300" : "240")}px;
  display: flex;
  flex-wrap: wrap;
  color: ${props => (props.color ? props.color : "white")};
  flex-direction: ${props => (props.align === "center" ? "column" : "row")};
  ul {
    list-style: none;
    padding: 0;
    font-size: 15px;
    margin: 0;
    li {
      margin: 0;
      i {
        display: inline-block;
        text-align: center;
        width: 20px;
        margin-right: 5px;
      }
    }
  }
  ${props => props.theme.smallBreakPoint} {
    padding: 15px;
  }
`

const AuthorTitle = styled.h5`
  font-size: 16px;
  text-align: ${props => (props.align ? props.align : "center")};
  font-weight: bold;
  font-style: italic;
  padding-bottom: 5px;
  margin: 0;
`

const AuthorRol = styled.p`
  font-size: 12px;
  letter-spacing: 2.4px;
  text-align: ${props => (props.align ? props.align : "center")};
  margin: 0;
  text-transform: uppercase;
`

const AuthorProfile = styled.div`
  display: block;
  margin: ${props =>
    props.align === "center" ? " 5px auto 10px" : "0 15px 0 0"};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
`

const ImageWrapper = styled.div`
  display: block;
  img {
    display: block;
    width: 100%;
  }
`

const TextWrapper = styled.div`
  padding: 15px 0;
  font-size: 22px;
  * {
    color: ${props => (props.color ? props.color : "white")};
  }
  .imageWrapper {
    p {
      font-size: 15px;
      font-style: italic;
      margin: 5px 0;
    }
    img {
      display: block;
      margin: 0;
    }
  }
  p {
    font-size: 19px;
    line-height: 1.58;
    color: ${props => (props.color ? props.color : "white")};
  }
  a[href] {
    text-decoration: underline;
    color: ${props => props.theme.Blue};
  }
  h1 {
    color: ${props => props.theme.Black};
    color: ${props => (props.color ? props.color : "white")};
  }
  h3 {
    font-size: 25px;
    font-weight: bold;
    color: ${props => (props.color ? props.color : "white")};
  }
  ul {
    margin: 0 auto 42px;
  }
  ol {
    margin: 0 auto 42px;
  }
  li {
    font-size: 18px;
    color: ${props => props.theme.Black};
    color: ${props => (props.color ? props.color : "white")};
  }
  ${props => props.theme.smallBreakPoint} {
    padding: 15px 24px;
  }
`

const ImageWithFooter = styled.div`
  img {
    display: block;
    margin: 0;
  }
  p {
  }
`

const QuoteWrapper = styled.div`
  margin: 20px 0;
  padding: 5px 70px;
  font-style: italic;
  border-top: 1px solid ${props => (props.color ? props.color : "white")};
  border-bottom: 1px solid ${props => (props.color ? props.color : "white")};
  p {
    margin: 5px 0;
    font-size: 18px;
    line-height: 1.33;
  }
  ${props => props.theme.smallBreakPoint} {
    margin: 20px 24px;
    padding: 15px 0px;
  }
`

const MediaWrapper = styled.div`
  display: block;
  position: relative;
  margin: 0px;
  width: 100%;
  padding: 25% 0;
  box-sizing: border-box;
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    display: block;
  }
`
const Social = styled.a`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.White};
  width: 40px;
  height: 40px;
  text-decoration: none;
  border-radius: 50%;
  text-align: center;
  box-sizing: border-box;
  margin: 5px 0;
  padding: ${props => (props.bigger ? "10px" : "14px")} 0;
  font-size: ${props => (props.bigger ? "18px" : "14px")};
`

export {
  NoticeTitleWrapper,
  NoticeSection,
  NormalNoticeContainer,
  VerticalNotice,
  YellowContainer,
  CustomRow,
  DonateContainer,
  MainNewSmall,
  MainNewSmallText,
  Divider,
  Share,
  YellowText,
  NoticeSectionTitle,
  Author,
  AuthorTitle,
  AuthorRol,
  AuthorProfile,
  ImageWrapper,
  TextWrapper,
  ImageWithFooter,
  QuoteWrapper,
  MediaWrapper,
  Social,
}
