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

const CustomContainer = styled(Container)`
  min-height: 400px;
`;

const CustomTitle = styled(YellowTitle)`

`

const CustomSecondTitle = styled(TitleContainer)`
  margin: 0;
  padding: 0px 110px;
`

const RightArrowContainer = styled.div`
  position: absolute;
  margin: 0;
  right: 0px;
  top: 0px;
  z-index: 999;

  @media (max-width: 768px) {
    right: .1em;
    top: 3em;
  }

  @media (max-width: 500px) {
    display:none;
  }
`;

const LeftArrowContainer = styled.div`
  position: absolute;
  margin: 0;
  left: 0px;
  top: 0px;
  transform: rotate(180deg);
  z-index: 999;

  @media (max-width: 768px) {
    left: .1em;
    top: 3em;
  }

  @media (max-width: 500px) {
    display:none;
  }

`;

const BigArrow = styled.i`
  font-size: 150px;
  color: #fff;
  width: 115px;
  display: block;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 80px; 
    width: 10px;
  }

`

const InteractiveContainer = styled.div`
  width: 100vw;
`;

const SubTitle = styled.h2`
  background-color: ${props => props.theme.Yellow};
  font-size: 30px;
  line-height: 34.5px;
  width: auto;
  display: inline-block;
  padding: 15px 31px;
  color: black;
  margin-left: 110px;
  a {
    margin-left: 40px;
    float: right;
    font-size: 15px;
    font-style: italic;
    color: ${props => props.theme.Black};
    text-decoration: underline;
  }

  ${props => props.theme.smallBreakPoint} {
    width: 100%;
  }

  ${props => props.theme.xlBreakPoint} {
    margin: 0;
  }

  @media (max-width: 768px) {
    margin-left: 0em;
  }

`

export {
  SpecialSection,
  CustomTitle,
  CustomContainer,
  CustomSecondTitle,
  BigArrow,
  InteractiveContainer,
  RightArrowContainer,
  LeftArrowContainer,
  SubTitle
}
