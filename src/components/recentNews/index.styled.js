import styled from "styled-components"
import { TitleMediumContainer, Section, Container, Col } from "../../theme/index.styled"

const RecentSection = styled(Section)`
    margin: 3em 0;

    ${props => props.theme.smallBreakPoint} {
        margin: 3em 1em;
      }
`

const CustomTitle = styled(TitleMediumContainer)`
    margin-left: 4em;
    padding:0;
    max-width: 1100px;
    h3{
        font-size: 30px;
        line-height: 1.22;
    }
`
const PrincipalContainer = styled(Container)`
    margin-left: 4em;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    max-width: 1100px;
    hr{
        background-color: ${props => props.theme.White}
        width: 95%;
        margin-bottom: 1em;
        margin-top: 1em;
    }

    ${props => props.theme.ipadBreakPoint} {
        margin: 0 auto;
      }

`

const NewsContainer = styled(Container)`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-top:1em;
    img{
        margin:0;
        height: 10em;
        padding-right :30px;
    }
    ${props => props.theme.xlBreakPoint} {
        img{
            padding: 0 0 1em 1em!important;
        }
      }
`

const NewsText= styled(Container)`

    max-width: 205px;
    margin: 0;
    h3{
        color: ${props => props.theme.White}
        font-size: 20px;
        font-weight: bold;
        line-height: 1.16;
        text-align: left;
    }
    p{
        color: ${props => props.theme.White}
        text-align: left;
        font-size: 17px;
        line-height: 1.44;
        
    }

    ${props => props.theme.xlBreakPoint} {
        h3{
            display:none;
        }
      }
`

const DateText = styled.p`

  font-size: 16px;
  color: ${props => props.theme.DarkYellow}
  line-height: 25px;
  max-width: 15em;
  line-height: 1.29;    
  text-align: left;
  margin:0;

`

const InterCol = styled(Col)`

${props => props.theme.xlBreakPoint} {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

`

export{CustomTitle, NewsContainer, NewsText, PrincipalContainer, DateText, RecentSection, InterCol}