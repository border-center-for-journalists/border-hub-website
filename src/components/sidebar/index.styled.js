import styled from "styled-components"

const Sidebar = styled.div`
  position: fixed;
  transition: all 0.5s;
  width: ${props => props.theme.SidebarWidth}px;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.minify ? "transparent" : "black")};
  z-index: 101;
  ${props => props.theme.largeBreakPoint} {
    width: ${props => props.theme.SidebarWidth2x}px;
  }
  ${props => props.theme.smallBreakPoint} {
    left: -${props => props.theme.SidebarWidth}px;
  }
`

const Social = styled.a`
  position: relative;
  display: inline-block;
  background-color: ${props => props.theme.Yellow};
  color: ${props => props.theme.Black};
  width: 40px;
  height: 40px;
  text-decoration: none;
  border-radius: 50%;
  text-align: center;
  box-sizing: border-box;
  margin: 5px 0;
  padding: ${props => (props.bigger ? "10px" : "14px")} 0;
  font-size: ${props => (props.bigger ? "18px" : "14px")};
  box-shadow: 0px 3px 7px 0 rgba(1, 0, 1, 0.23);
`
const Hamburguer = styled.button`
  cursor: pointer;
  position: absolute;
  transition: all 0.5s;
  z-index: 1;
  top: 0;
  left: 0;
  border: 0 none;
  background: black;
  width: ${props => props.theme.SidebarWidth}px;
  height: ${props => props.theme.SidebarWidth}px;
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
      width: 0;
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
  ${props => props.theme.largeBreakPoint} {
    width: ${props => props.theme.SidebarWidth2x}px;
    height: ${props => props.theme.SidebarWidth2x}px;
    i {
      left: 10px;
    }
  }
  ${props => props.theme.smallBreakPoint} {
    left: ${props => props.theme.SidebarWidth}px;
  }
`

const Menu = styled.div`
  position: fixed;
  transition: all 0.5s;
  background-color: white;
  color: white;
  left: 0;
  top: ${props => props.theme.SidebarWidth}px;
  top: 0;
  min-width: 443px;
  padding-left: 130px;
  padding: 0 40px 40px 40px;
  box-sizing: border-box;
  z-index: 101;
  visibility: hidden;
  opacity: 0;
  img {
    width: 200px;
    margin: 20px 0;
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
  ${Social} {
    margin-right: 20px;
  }
  p {
    margin: 0;
    text-align: left;
    a {
      color: ${props => props.theme.White};
      font-family: "Aleo", serif;
      text-decoration: none;
      display: inline-block;
      padding: 5px;
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
  ${props => props.theme.smallBreakPoint} {
    width: 100%;
  }
  ${props => props.theme.largeBreakPoint} {
    min-width: 538px;
    top: ${props => props.theme.SidebarWidth2x}px;
  }
`

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  left: 0;
  display: none;
  &.open {
    display: block;
  }
`

const LangItem = styled.a`
  text-decoration: ${props =>
    props.selected ? "underline!important" : "none"};
  font-weight: ${props => (props.selected ? "700" : "400")};
`

export { Sidebar, Social, Hamburguer, Menu, Overlay, LangItem }
