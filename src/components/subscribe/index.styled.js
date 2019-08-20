import styled from "styled-components"
import {Section, Row, Container } from "../../theme/index.styled"

const YellowBody = styled(Section)`
    width:100%;
    background-color:${props => props.theme.Yellow}
    padding: 0 1em;
`
const CustomRow = styled(Row)`
    input{
        width:14.8em;
    }

    ${props => props.theme.mediumBreakPoint} {
        width:100%;
        input{
            width:100%;
        }
        button{
            width:100%;
        }
        
      }

    ${props => props.theme.smallBreakPoint} {
        button{
            width:100%;
        }
        
      }
`

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