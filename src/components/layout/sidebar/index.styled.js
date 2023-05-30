import styled from "styled-components";

const Sidebar = styled.div`
  display: none;

  ${props => props.theme.lgBP} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 60px;
    height: 100vh;
    background-color: ${props => props.minify ? "transparent" : props.theme.Black};
    position: ${props => props.minify ? "fixed" : "sticky"};
    top: 0;
    left: 0;
  }

  ${props => props.theme.xlBP} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 60px;
    height: 100vh;
    background-color: ${props => props.minify ? "transparent" : props.theme.Black};
    position: ${props => props.minify ? "fixed" : "sticky"};
    top: 0;
    left: 0;
  }
`
const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    display: inline-block;
    text-decoration: none;
    background-color: ${props => props.theme.Yellow};
    color: ${props => props.theme.Black};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    padding: 12px 0;
    font-size: 17px;
    margin: 0.25em auto;
    box-shadow: 0px 3px 7px 0 rgba(1, 0, 1, 0.23);
  }

  span {
    display: none;
  }
`

export {
  Sidebar,
  SocialContainer
}