import styled from "styled-components"
import { Container, Row } from "../../theme/index.styled"

const NoticeSection = styled.section`
  padding-top: 120px;
  background-color: ${props => (props.color ? props.color : props.theme.Black)};
  img{
    margin:0;
  }
`

const NormalNoticeContainer = styled.div`
  widht:100%;
  height:100%;
  background-color: ${props => props.theme.White}
  `

const YellowContainer = styled(Container)`
  background-color:${props => props.theme.Yellow}
  padding: 0 1em;

`

const CustomRow = styled(Row)`
    input{
        width: 10em;
        margin-right: 1em;
    }
    button{
      width:200px;
    }

    ${props => props.theme.mediumBreakPoint} {
        width:100%;
        input{
            width:100%;
        }
        button{
            width:100%;
        }
        
      }

    ${props => props.theme.smallBreakPoint} {
        button{
            width:100%;
        }
        
      }
`

const DonateContainer = styled(Container)`
    background-color: black;
    padding: 45px 45px;
    margin: 0 auto 45px;
    text-align:center;
    p{
      color:white
    }
    h2{
      color:white;
    }
    button{
      background-color: ${props => props.theme.Yellow};
      color: black  ;
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
    img{
        margin:0;
        height: 13em;
    }
`

const MainNewSmallText= styled.div`
    padding-left:30px;

    h3{
        color: ${props => props.theme.Black}
        font-size: 19px;
        line-height: 25px;
        text-align: left;
    }
    p{
        color: ${props => props.theme.Black}
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
  text-align: ${props => (props.align ? props.align : "center")}  ;
  color: white;
  p {
    font-size: 15px;
    line-height: 1.67;
    margin: 0;
  }
  h1 {
    color: white;
  }
  hr {
    border: 0 none;
    border: 0 none;
    border-top: 4px solid ${props => props.theme.Yellow};
    margin-top: 25px;
    margin-bottom: 5px;
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
`

const Author = styled.div`
  flex: 0 1 32%;
  color: ${props => (props.color ? props.color : "white")};
  ul {
    list-style: none;
    padding: 0;
    font-size: 15px;
    margin: 0;
    li {
      margin: 0;
    }
  }
`

const AuthorTitle = styled.h5`
  font-size: 16px;
  text-align: ${props => (props.align ? props.align : "center")};
  font-weight: bold;
  font-style: italic;
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
  width: 60px;
  height: 60px;
  margin: 5px auto 10px;
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
  img {
    display: block;
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
  background-color: transparent;
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
  QuoteWrapper,
  MediaWrapper,
  Social,
}
