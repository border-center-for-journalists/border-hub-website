import styled from "styled-components"
import { Section, Row } from "../../theme/index.styled"

const YellowBody = styled(Section)`
  width: 100%;
  background-color: ${props => props.theme.Yellow};
  padding: 0 1em;
`
const CustomRow = styled(Row)`
  input {
    width: 14.8em;
  }

  ${props => props.theme.mediumBreakPoint} {
    width: 100%;
    input {
      width: 100%;
    }
    button {
      width: 100%;
    }
  }

  ${props => props.theme.smallBreakPoint} {
    button {
      width: 100%;
    }
  }
`

export { YellowBody, CustomRow }
