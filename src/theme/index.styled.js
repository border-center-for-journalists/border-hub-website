import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
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
  ${props =>
    !props.size ? "max-width:" + props.theme.ContainerCommon + "px" : ""};
  ${props =>
    props.size === "small"
      ? "max-width:" + props.theme.ContainerSmall + "px"
      : ""};
  ${props =>
    props.size === "medium"
      ? "max-width:" + props.theme.ContainerMedium + "px"
      : ""};
`

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
  justify-content: ${props =>
    props.align && props.align === "start" ? "flex-start" : props.align};
  ${props => (props.wrap ? "flex-wrap: wrap;" : "")}
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
  flex: ${props => (props.width ? "0 1 " + props.width : "0 1 auto")};
  flex-direction: column;
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
  max-width: 15em;
  text-align: left;
  margin:0;
  display: ${props => (props.show ? "block" : "none")}
  padding-right: 3em;
  b{
    color: ${props => (props.color ? props.theme.Yellow : props.theme.Black)};
  }

  ${props => props.theme.mediumBreakPoint} {
    width: 15em;  
  }

  ${props => props.theme.smallBreakPoint} {
    margin: ${props => (props.color ? "0 3em" : "0")};
  }

  ${props => props.theme.xlBreakPoint} {
    display: ${props => (props.show ? "none" : "block")}
    margin: ${props => (props.color ? "1em 0" : "0")};
    font-size: 17px 
  }
  ${props => props.theme.xlBreakPoint} {
    padding-right: 0;
    &::after {
      content:"";
      display:block;
      border-bottom:${props =>
        props.color ? "5px solid" + props.theme.Yellow : "0"};
      width: 7em;
  }
  }

`
const Col = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  ${props => props.theme.xlBreakPoint} {
    flex: 0 0 100%;
    max-width: 100%;
    img {
      padding: 0 1.5em 1em;
    }
  }
`
const TitleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.fullHeight ? "flex-end" : "flex-start")};
  align-items: ${props => (props.fullHeight ? "flex-end" : "flex-start")};
  position: relative;
  max-width: 40em;
  text-align: left;
  margin: 0 1em;

  h1 {
    font-size: 39px;
    color: white;
    line-height: 46px;
    text-align: left;
    padding-bottom: 0.5em;
    border-bottom: 5px solid ${props => props.theme.Yellow};
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
    width: 90%;
    height: 100%;
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
    width:100%;
    input{
        height: 40px;
        background-color:${props => (props.color ? props.theme.Yellow : props.theme.White)};
        border: 1px solid ${props => props.theme.Black};
        margin-right: 2em;
    }
    textarea{
      background-color:${props => (props.color ? props.theme.Yellow : props.theme.White)};
      border: 1px solid ${props => props.theme.Black};
      margin-right: 2em;
    }
    p{
        margin:0;
        font-size: 15px;
        line-height: 1.56;
        color: ${props => props.theme.Black};
    }

    button{
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
}
