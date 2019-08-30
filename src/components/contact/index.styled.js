import styled from "styled-components"
import {
  TitleMediumContainer,
  Section,
  Row,
  Rows,
  Container,
  Col,
} from "../../theme/index.styled"

const ContactUsSection = styled(Section)`
  background-color: white;
  padding: 3em;
`
const ContactContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 840px !important;
`

const TitleYellow = styled(TitleMediumContainer)`
  text-align: center;
  max-width: 840px !important;
  h3 {
    color: ${props => props.theme.Black};
    font-size: 39px;
    line-height: 46px;
    padding-bottom: 0.5em;
  }
  p {
    font-size: 22px;
    line-height: 30px;
    font-weight: bold;
    padding-top: 0.5em;
  }
`
const CustomColForm = styled(Col)`
  flex: 0 0 66%;
  max-width: 66%;
  textarea {
    width: 100%;
    padding: 10px;
    margin: 0;
  }
  button {
    padding: 12px;
    margin-bottom: 30px;
  }
`

const CustomColText = styled(Col)`
  flex: 0 0 30%;
  max-width: 30%;
  h4 {
    font-size: 17px;
    margin-bottom: 0px;
    font-weight: bold;
  }
  p {
    font-size: 17px;
  }
  i {
    margin-right: 15px;
    font-size: 20px;
  }
`

const CustomRows = styled(Rows)`
  padding-bottom: 2em;
  input {
    width: 100%;
    padding: 10px;
    font-size: 12.5px;
    margin: 0;
  }
  ${props => props.theme.mediumBreakPoint} {
    padding: 0;
    ${Row} {
      flex: 1 0 auto;
      max-width: 100%;
      margin-bottom: 25px;
    }
  }
  ${props => props.theme.smallBreakPoint} {
  }
`

export {
  ContactUsSection,
  ContactContainer,
  TitleYellow,
  CustomColForm,
  CustomColText,
  CustomRows,
}
