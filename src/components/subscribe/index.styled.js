import styled from "styled-components"
<<<<<<< HEAD
import {Section, Row, Container } from "../../theme/index.styled"
=======
import { Section, Row } from "../../theme/index.styled"
>>>>>>> 7bed148e4811b0d86efb07300b18a5b6339e6a98

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

<<<<<<< HEAD
const XContainer = styled(Container)`
      max-width: 950px;
      button{
          font-size:35px;
          float: right;
          padding-top: 20px;
          cursor: pointer;
          border: none;
          background-color: transparent;
      }
      button:focus{
          outline: transparent;
      }
`


export{YellowBody, CustomRow, XContainer}
=======
export { YellowBody, CustomRow }
>>>>>>> 7bed148e4811b0d86efb07300b18a5b6339e6a98
