import styled from "styled-components"

const Footer = styled.footer`
  display: block;
  padding: 40px 10px;
  text-align: center;
  background-color:black;
  img {
    height: 60px;
    width: auto;
    max-width: 90%;
    margin: 10px 10px;
  }
  ${props => props.theme.smallBreakPoint} {
    background-color: ${props => props.theme.Yellow};
    img{
      display:none;
    }

  } 
`
const Social = styled.a`
  position: relative;
  display: none;
  background-color: ${props => props.theme.Black};
  color: ${props => props.theme.White};
  width: 85px;
  height: 84px;
  text-decoration: none;
  border-radius: 50%;
  text-align: center;
  box-sizing: border-box;
  margin: 5px 16px;
  padding: 28px 0;
  font-size: 25px;
  ${props => props.theme.smallBreakPoint} {
    display: inline-block
  } 
`
export { Footer, Social }
