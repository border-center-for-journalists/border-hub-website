import styled from "styled-components"
import {
  YellowTitle,
  Section,
  Container,
  TitleContainer,
} from "../../theme/index.styled"
import bg from "../../theme/images/1.jpg"

const SpecialSection = styled(Section)`
  background: linear-gradient(
      to right,
      rgba(31, 25, 26, 0.6) 20%,
      rgba(153, 18, 18, 0.6)
    ),
    url(${props => (props.bg ? props.bg : bg)});
  background-position: center;
  background-size: cover;
  padding: 2em 3em;
  a {
    text-decoration: none;
  }
  ${props => props.theme.smallBreakPoint} {
    padding: 2em 24px;
  }
`

const CustomContainer = styled(Container)``

const CustomTitle = styled(YellowTitle)`
  width: auto;
  display: inline-block;
  a {
    margin-left: 40px;
  }
`

const CustomSecondTitle = styled(TitleContainer)`
  margin: 0;
  padding: 0;
`

const BigArrow = styled.i`
  font-size: 165px;
  color: #fff;
  margin-left: 40px;
  width: 130px;
  display: block;
  ${props => props.theme.mediumBreakPoint} {
    display: none;
  }
`

const InteractiveContainer = styled.div`
  width: 100vw;
`;

export {
  SpecialSection,
  CustomTitle,
  CustomContainer,
  CustomSecondTitle,
  BigArrow,
  InteractiveContainer,
}
