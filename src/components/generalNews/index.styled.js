import styled from "styled-components"
import { TitleContainer, Section, Col } from "../../theme/index.styled"

const GeneralNewsSection = styled(Section)`
  background-color: white;
  padding: 15px;
  padding-top: 80px;
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

export { GeneralNewsSection, GeneralTitle, Quote }
