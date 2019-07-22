import styled from "styled-components"
import { TitleContainer, Section, Col } from "../../theme/index.styled"

const GeneralNewsSection = styled(Section)`
background-color: white;
padding:5em;
`

const GeneralTitle = styled(TitleContainer)`
    margin: 0 auto;
h1{
    color:${props => props.theme.Black}
}
h3{
    font-size: 25px;
    font-weight: bold;
}
p{
    color:${props => props.theme.Black}
    font-size: 19px;
    line-height: 1.58;
}
ul{
    margin: 0 auto 42px;
}
ol{
    margin: 0 auto 42px;
}
li{
    font-size: 18px;
    color:${props => props.theme.Black}
}
`

const Quote = styled.p`
    font-size: 18px;
    font-style: italic;
    line-height: 1.33;
    color:${props => props.theme.Black}
    border-bottom: 1px solid ${props => props.theme.Black};
    border-top: 1px solid ${props => props.theme.Black};
    padding: 23px 50px;
    b{
        color:${props => props.theme.Black}
    }
`

const RectangleColorText = styled(Col)`
    flex: 0 0 30%;
    max-width: 30%;
    font-size: 13px;
    line-height: 1.54;
    background-color: ${props => props.theme.SoftGray};
    padding: 35px 22px;
    b{
        color:${props => props.theme.Black}
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

export{GeneralNewsSection, GeneralTitle, Quote, RectangleColorText, RectangleText, ColContainer}