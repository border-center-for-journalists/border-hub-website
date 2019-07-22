import styled from "styled-components"
import {YellowTitle, Section } from "../../theme/index.styled"
import bg from "../../theme/images/1.jpg"

const SpecialSection = styled(Section)`
    background: linear-gradient(to right,  ${props => props.theme.Black}99 20%, ${props => props.theme.Red}99), url(${props => (props.bg ? props.bg : bg)});
    background-position: center;
    background-size: cover;
    padding: 2em 3em;
`

const CustomTitle = styled(YellowTitle)`
    max-width: 6.5em;
   
`


export{SpecialSection, CustomTitle}