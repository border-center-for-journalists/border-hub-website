import styled from "styled-components"
import { Section, Col } from "../../theme/index.styled"

const YellowBody = styled(Section)`
    width:100%;
    background-color:${props => props.theme.Yellow}
    padding: 0 1em;
`
const Col_3 = styled(Col)`
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
`

const FormBody = styled.form`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    input{
        height: 40px;
        background-color: ${props => props.theme.Yellow};
        border: 1px solid ${props => props.theme.Black};
    }
    p{
        margin:0;
        font-size: 15px;
        line-height: 1.56;
        color: ${props => props.theme.Black};
    }

    button{
        background-color: black;
        color: white;
        cursor: pointer;
        border: none;
        width: 236px;
        height: 40px;
        display: block;
        margin: 1.23em auto 0;
        font-size: 19.5px;
        line-height: 1.44;
        font-weight: bold;
        
    }
    ${props => props.theme.mediumBreakPoint} {
        input{
            width:80%;
        }
        button{
            width:80%;
        }
      }

      ${props => props.theme.xlBreakPoint} {
        input{
            width:100%;
        }
        button{
            width:100%;
        }
      }
`

export{YellowBody, FormBody, Col_3}