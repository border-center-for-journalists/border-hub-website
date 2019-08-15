import styled from "styled-components"
import { Section, Container, Paragraph,ImageWrapper } from "../../theme/index.styled"

const NewsContainer = styled(Section)`
background-color: white;
padding: 36px;
margin: 0 auto;
max-width : 700px;  

${props => props.theme.ipadBreakPoint} {
    padding: 2em 5em 0 5em;
  }

${props => props.theme.xlBreakPoint} {
    padding: 0;
}

`
const MainNewBig = styled(Container)`
    padding-bottom:2em;
    display: flex;
    flex-direction: column;
    h2{
        text-align: left;
        color:${props => props.theme.Black}
        font-size: 38px;
        line-height: 38px;
    }
`
const TextContainer = styled(Container)`
    ${props => props.theme.xlBreakPoint} {
        padding: 0 1.5em;
    }
`

const SubTitleParagraph = styled(Paragraph)`
    width: 90%;
    font-size: 20px;
    ${props => props.theme.xlBreakPoint} {
        display: none
    }
`

const MainNewSmall = styled(Container)`
    padding: 15px 0 0 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    hr{
        width:100%;
        color:${props => props.theme.DarkGray}
    }
    img{
        margin:0;
        height: 13em;
    }
`

const MainNewSmallText= styled(Container)`
    padding-left:30px;

    h3{
        color: ${props => props.theme.Black}
        font-size: 28px;
        line-height: 34.5px;
        text-align: left;
    }
    p{
        color: ${props => props.theme.Black}
        text-align: left;
        width:90%;
        
    }
`


export{NewsContainer, MainNewBig, SubTitleParagraph, MainNewSmall, MainNewSmallText, TextContainer}