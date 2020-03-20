import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  -moz-box-pack: justify;
  justify-content: space-between;
`

const Content = styled.div`
  padding: 0 0 0 ${props => (props.minify ? "0" : props.theme.SidebarWidth)}px;
  transition: padding 0.5s;
  font-family: ${props => props.theme.FontAleo};
  * {
    font-family: ${props => props.theme.FontAleo};
  }
  ${props => props.theme.largeBreakPoint} {
    padding: 0 0 0
      ${props => (props.minify ? "0" : props.theme.SidebarWidth2x)}px;
  }
  ${props => props.theme.smallBreakPoint} {
    padding: 0;
  }
`

const Section = styled.section`
  ${props => (props.paddingTop ? "padding-top: 130px;" : "")}
  ${props =>
    props.darkMode === true
      ? "background-color: " + props.theme.Black + ";"
      : ""}
`

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  ${props => (props.darkMode ? ".recharts-legend-wrapper{color: #fff;}" : "")}
  ${props => (props.padding ? "padding: 25px 0;" : "")}
  ${props => (props.wrapPadding ? "padding: 25px;" : "")}
  ${props =>
    !props.size ? "max-width:" + props.theme.ContainerCommon + "px" : ""};
  ${props =>
    props.size === "small"
      ? "max-width:" + props.theme.ContainerSmall + "px;"
      : ""}
  ${props =>
    props.size === "medium"
      ? "max-width:" + props.theme.ContainerMedium + "px;"
      : ""}
  ${props =>
    props.size === "large"
      ? "max-width:" + props.theme.ContainerLarge + "px;"
      : ""}
  ${props => (props.size === "full" ? "max-width: 100%;" : "")}

  ${props => props.theme.largeBreakPoint} {
    ${props =>
    props.xlStaticSize
      ? ""
      : "max-width:" + props.theme.ContainerExtraLarge + "px;"};
  }
`
const RowGap = gap => {
  if (!gap || gap === "") return ""
  return `
    & > * {
      padding: ${gap};
    }
  `
}
const Rows = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${props =>
    props.align && props.align === "start" ? "flex-start" : props.align};
  ${props => (props.wrap ? "flex-wrap: wrap;" : "")}
  ${props => RowGap(props.gap)}
  ${props => (props.vAlign ? `align-items:${props.vAlign};` : "")}
  ${props => props.theme.mediumBreakPoint} {
    flex-direction: ${props => (props.rowM ? "row" : "column")};
    justify-content: ${props =>
    props.alignM && props.alignM === "start" ? "flex-start" : props.alignM};
  }
  ${props => props.theme.smallBreakPoint} {
    flex-direction: ${props => (props.rowS ? "row" : "column")};
    justify-content: ${props =>
    props.alignS && props.alignS === "start" ? "flex-start" : props.alignS};
  }
  ${props => props.theme.xlBreakPoint} {
    flex-direction: ${props => (props.rowXs ? "row" : "column")};
    justify-content: ${props =>
    props.alignXs && props.alignXs === "start"
      ? "flex-start"
      : props.alignXs};
  }
`
const Row = styled.div`
  flex: ${props => (props.width ? "0 1 " + props.width : "1 0 auto")};
  ${props => (props.shrink ? "flex: 0 1 auto;" : "")}
  flex-direction: column;
  max-width: 100%;
  max-width: ${props => (props.width ? props.width : "100%")};
  ${props =>
    props.alignColumn
      ? "align-items: center;justify-content: center;display: flex;"
      : ""}
   ${props => props.theme.largeBreakPoint} {
    flex: ${props => (props.widthXl ? "0 1 " + props.widthXl : "1 0 auto")};
    max-width: ${props => (props.widthXl ? props.widthXl : "100%")};
    ${props => (props.shrinkXl ? "flex: 0 1 auto;" : "")}
  }
  ${props => props.theme.mediumBreakPoint} {
    flex: ${props => (props.widthXs ? "0 1 " + props.widthXs : "1 0 auto")};
    max-width: ${props => (props.widthXs ? props.widthXs : "100%")};
    ${props =>
    props.contact
      ? "h4{display: inline-block;}p{display: inline-block;}"
      : ""}
  }
  ${props => props.theme.smallBreakPoint} {
    flex: ${props => (props.widthS ? "0 1 " + props.widthS : "1 0 auto")};
    max-width: ${props => (props.widthS ? props.widthS : "100%")};
  }
`

const Paragraph = styled.p`
  font-size: 17px;
  font-weight: 300;
  font-weight: normal;
  line-height: 23px;
  color: ${props => props.theme.Black};
`

const ImageWrapper = styled.div`
  img {
    width: 100%;
    margin-bottom: 15px;
    display: block;
  }
  p {
    font-size: 14px;
    font-style: italic;
    color: ${({ theme, color }) => color === 'white' ? color : theme.Black};
    text-align: right;
  }
`

const TitleYellow = styled.h1`
  background-color: ${props => props.theme.Yellow};
  font-size: 30px;
  line-height: 34.5px;
  width: 100%;
  padding: 15px 0px 15px 31px;
  color: black;
  text-align: center;
  ${props => props.theme.xlBreakPoint} {
    margin: 0;
  }
`

const YellowTitle = styled.h3`
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
  ${props => props.theme.xlBreakPoint} {
    margin: 0;
  }
`

const AuthorContainer = styled.p`
  font-size: 15px;
  color: ${props => (props.color ? props.theme.White : props.theme.Black)};
  ${props =>
    props.yellowMode ? "color:" + props.theme.Yellow + "!important;" : ""}
  line-height: 25px;
  text-align: left;
  margin: 0;
  min-width: 200px;
  display: ${props => (props.show ? "block" : "none")};
  b,
  i {
    color: ${props => (props.color ? props.theme.Yellow : props.theme.Black)};
    ${props => (props.yellowMode ? "color:" + props.theme.Yellow + ";" : "")}
  }

  ${props => props.theme.xlBreakPoint} {
    margin: ${props => (props.color ? "1em 0" : "0")};
    font-size: 17px;
  }
  ${props => props.theme.xlBreakPoint} {
    padding-right: 0;
    &::after {
      content: "";
      display: block;
      border-bottom: ${props =>
    props.color ? "5px solid" + props.theme.Yellow : "0"};
      width: ${props => (props.main ? "158px" : "190px")};
    }
  }
`
const Col = styled.div`
  flex: 0 0 48%;
  max-width: 48%;
  ${props => props.theme.smallBreakPoint} {
    flex: 0 0 100%;
    max-width: 100%;
  }
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.fullHeight ? "flex-end" : "flex-start")};
  align-items: ${props => (props.fullHeight ? "flex-end" : "flex-start")};
  position: relative;
  text-align: left;
  padding-left: 40px;
  h1 {
    width: 100%;
    font-size: 39px;
    color: white;
    line-height: 46px;
    text-align: left;
    padding-bottom: 0.5em;
    border-bottom: 5px solid ${props => props.theme.Yellow};
  }
  h1 a {
    color: inherit;
    text-decoration: none;
    display: block;
  }
  p {
    line-height: 31.5px;
    color: white;
  }

  b {
    color: ${props => props.theme.Yellow};
  }

  ${props => props.theme.mediumBreakPoint} {
    align-items: flex-start;
    padding: 0;
  }

  ${props => props.theme.smallBreakPoint} {
    margin-top: 1em;
  }

  ${props => props.theme.xlBreakPoint} {
    h1 {
      border-bottom: 0px;
      padding: 0;
      margin: 0;
    }
  }
`

const TitleMediumContainer = styled(Container)`
  padding: 1.5em 0 0.1em;

  h3 {
    padding-bottom: 15px;
    margin-bottom: 15px;
    color: ${props => (props.color ? props.theme.Black : props.theme.White)};
    border-bottom: 3px solid;
    border-color: ${props =>
    props.color ? props.theme.Black : props.theme.Yellow};
  }

  ${props => props.theme.ipadBreakPoint} {
    margin: 0 auto;
  }
`

const FormBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  form {
    width: 100%;
  }
  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    height: 40px;
    background-color: ${props =>
    props.color ? props.theme.Yellow : props.theme.White};
    border: 1px solid ${props => props.theme.Black};
    margin-right: 2em;
  }
  textarea {
    background-color: ${props =>
    props.color ? props.theme.Yellow : props.theme.White};
    border: 1px solid ${props => props.theme.Black};
    margin-right: 2em;
  }
  label,
  p {
    display: block;
    margin: 0;
    margin-top: 10px;
    font-size: 12.5px;
    line-height: 1.56;
    color: ${props => props.theme.Black};
  }

  input[type="submit"],
  button {
    width: 100%;
    background-color: black;
    color: white;
    cursor: pointer;
    border: none;
    display: block;
    margin: 32px auto 0;
    font-size: 19.5px;
    line-height: 1.2;
    font-weight: bold;
  }
`
const RectangleColorText = styled(Col)`
  flex: 0 0 30%;
  max-width: 30%;
  font-size: 13px;
  line-height: 1.54;
  background-color: ${props => props.theme.SoftGray};
  padding: 35px 22px;
  b {
    color: ${props => props.theme.Black};
  }
  ${props => props.theme.smallBreakPoint} {
    flex: 0 0 100%;
    max-width: 1000%;
  }
`
const RectangleText = styled(Col)`
  flex: 0 0 70%;
  max-width: 70%;
  padding: 0 19px;
  ${props => props.theme.smallBreakPoint} {
    flex: 0 0 100%;
    max-width: 100%;
  }
`
const ColContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
`

const Message = styled.p`
  padding: 40px 0;
  text-align: center;
  font-size: 20px;
  color: ${props => props.theme.Black};
  margin: 0;
  span {
    background-color: ${props => props.theme.Yellow};
    padding: 15px 30px;
    max-width: 90%;
    display: inline-block;
  }
`

const ImgBackground = styled.div`
  background-color: white;
  font-size: 0px;
`;

export {
  Wrapper,
  Content,
  Section,
  Container,
  Rows,
  Row,
  Paragraph,
  ImageWrapper,
  YellowTitle,
  TitleYellow,
  AuthorContainer,
  Col,
  TitleContainer,
  TitleMediumContainer,
  FormBody,
  RectangleColorText,
  RectangleText,
  ColContainer,
  Message,
  ImgBackground
}
