import styled from "styled-components";

const Hamburguer = styled.button`
  width: 60px;
  height: 60px;
  margin: 0;
  padding: 0 6px;
  cursor: pointer;  
  transition: all 0.5s;
  border: 0 none;
  background: ${props => props.theme.Black};

  i {
    display: block;
    top: 0px;
    left: 5px;
    width: 25px;
    height: 0px;
    border-bottom: 3px solid white;
    position: relative;
    border-radius: 10px;
    transition: all 0.2s;
    &:before {
      content: "";
      position: absolute;
      top: -12px;
      left: 0;
      width: 37px;
      border-top: 3px solid white;
      border-radius: 10px;
      transition: all 0.5s;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 37px;
      border-top: 3px solid white;
      border-radius: 10px;
      transition: all 0.5s;
    }
  }
  &.open {
    i {
      border-bottom: 0;
      &:before {
        transform: rotate(45deg);
        transform-origin: left top 0;
        left: 9px;
      }
      &:after {
        transform: rotate(-45deg);
        transform-origin: left top 0;
        bottom: -17px;
        left: 6px;
      }
    }
  }
`

const Menu = styled.div`
  background-color: ${props => props.theme.White};
  position: fixed;
  transition: all 0.5s;
  padding: 1em;
  min-width: 100vw;
  left: 0;
  top: 0;
  visibility: hidden;
  opacity: 0;
  
  img {
    width: 200px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 25px 0 15px 0;
    a {
      font-family: "Aleo", serif;
      font-size: 18px;
      display: inline-block;
      color: ${props => props.theme.Black};
      text-decoration: none;
      font-weight: bold;
      letter-spacing: 0.5px;
      line-height: 2;
      &:hover {
        color: ${props => props.theme.Yellow};
      }
    }
  }
  
  ${Hamburguer} {
    left: initial;
    right: 20px;
    background-color: white;
    i:before,
    i:after {
      border-color: black;
    }
  }
  &.open {
    visibility: visible;
    opacity: 1;
  }

  ${props => props.theme.lgBP} {
    min-width: 538px;
    top: 60px;
    ${Hamburguer} {
      display: none;
    }
  }

  ${props => props.theme.xlBP} {
    min-width: 538px;
    top: 60px;
    ${Hamburguer} {
      display: none;
    }
  }
`

const MenuHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100% !important;
  justify-content: space-between;
  vertical-align: middle;

  a {
    display: inline-block;
    margin: 0;
    padding: 0;
    height: 60px;
  }

  img {
    margin: 0;
    padding: 0;
  }
`

const MenuBody = styled.div`
  width: 100% !important;
  padding: 0 1em 1em;
`

const SocialContainer = styled.div`
  width: 100% !important;

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
    margin-right: 1em;
  }

  span {
    display: none;
  }
`

export {
  Hamburguer,
  Menu,
  MenuHeader,
  MenuBody,
  SocialContainer,
}