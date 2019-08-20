import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  -moz-box-pack: justify;
  justify-content: space-between;
`

const Content = styled.div`
  padding: 0 0 0 ${props => props.theme.SidebarWidth}px;
  transition: padding 0.5s;
  font-family: ${props => props.theme.FontAleo};
  * {
    font-family: ${props => props.theme.FontAleo};
  }
  ${props => props.theme.largeBreakPoint} {
    padding: 0 0 0 ${props => props.theme.SidebarWidth2x}px;
  }
  ${props => props.theme.smallBreakPoint} {
    padding: 0;
  }
`

const Section = styled.section``

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
<<<<<<< HEAD
  background-color: ${props => (props.color ? props.color : "")} 
=======
  ${props => (props.padding ? "padding: 25px 0;" : "")}
>>>>>>> 7bed148e4811b0d86efb07300b18a5b6339e6a98
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
    max-width: ${props => props.theme.ContainerExtraLarge}px;
  }
`
const RowGap = gap => {
  if (!gap || gap === "") return ""
  return `
     * {
      padding: ${gap};
    }
  `
}
const Rows = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
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
    flex-direction: ${props => (props.keepRow ? "row" : "column")};
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
`

const Paragraph = styled.p`
  font-size: 17px;
  font-weight: 300;
  line-height: 23px;
  color: ${props => props.theme.Black};
`

const ImageWrapper = styled.div`
  img {
    width: 100%;
    margin-bottom: 15px;
  }
  p {
    font-size: 14px;
    font-style: italic;
    color: ${props => props.theme.Black};
    text-align: right;
  }
`

const YellowTitle = styled.h3`
  background-color: ${props => props.theme.Yellow};
  font-size: 30px;
  line-height: 34.5px;
  width: 100%;
  padding: 15px 0px 15px 31px;
  color: black;
  ${props => props.theme.xlBreakPoint} {
    margin: 0;
  }
`

const AuthorContainer = styled.p`
  font-size: 15px;
  color: ${props => (props.color ? props.theme.White : props.theme.Black)};
  line-height: 25px;
  text-align: left;
  margin: 0;
  min-width: 200px;
  display: ${props => (props.show ? "block" : "none")};
  b {
    color: ${props => (props.color ? props.theme.Yellow : props.theme.Black)};
  }

  ${props => props.theme.mediumBreakPoint} {
  }

  ${props => props.theme.smallBreakPoint} {
  }

  ${props => props.theme.xlBreakPoint} {
    display: ${props => (props.show ? "none" : "block")};
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
      width: 7em;
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

const FormBody = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 20px;
  input {
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
  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.56;
    color: ${props => props.theme.Black};
  }

  button {
    background-color: black;
    color: white;
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
  AuthorContainer,
  Col,
  TitleContainer,
  TitleMediumContainer,
  FormBody,
  RectangleColorText,
  RectangleText,
  ColContainer,
}
