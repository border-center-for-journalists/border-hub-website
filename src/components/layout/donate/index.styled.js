import styled from "styled-components"

const Donate = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: ${props => props.theme.Yellow};
  color: ${props => props.theme.Black};
  font-family: Aleo, serif;
  font-weight: bold;
  padding: 0.2em 1em;

  &.rounded {
    width: 100%;
    text-align: center;
    margin-bottom: 1em;
    border-radius: 1em;
    box-shadow: 0px 3px 7px 0 rgba(1, 0, 1, 0.23);

  }

  &.square {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60px;
  }

  &.square-black {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60px;
    background-color: ${props => props.theme.Black};
    color: ${props => props.theme.White};
    margin: 1em 0;
  }
`

export {
  Donate
}