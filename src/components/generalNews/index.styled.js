import styled from "styled-components"
import { TitleContainer, Section, Row, Rows, Container, Col } from "../../theme/index.styled"

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
li{
    font-size: 18px;
    color:${props => props.theme.Black}
}
`

export{GeneralNewsSection, GeneralTitle}