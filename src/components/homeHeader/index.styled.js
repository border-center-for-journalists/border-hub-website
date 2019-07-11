import styled from "styled-components"
import { Section, Container } from "../../theme/index.styled"
import bg from "../../theme/images/1.jpg"

const Banner = styled(Section)`
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(to bottom, transparent 40%, black), url(${props => (props.bg ? props.bg : bg)});
  min-height: ${props => (props.fullHeight ? "600px" : "300px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #000;

  ${props => props.theme.ipadBreakPoint} {
    min-height: ${props => (props.fullHeight ? "440px" : "200px")};
  }

  ${props => props.theme.smallBreakPoint} {
    min-height: ${props => (props.fullHeight ? "340px" : "200px")};
  }

  ${props => props.theme.xlBreakPoint} {
    background-image: url(${props => (props.bg ? props.bg : bg)});
  }
`

const BannerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.fullHeight ? "flex-end" : "flex-start")};
  align-items: ${props => (props.fullHeight ? "flex-end" : "flex-start")};
  max-width:65em;

  p {
    font-size: 15px;
    color: white;
    line-height: 25px;
    max-width: 15em;
    text-align: left;
  }
  b{
    color: ${props => props.theme.Yellow}
  }

  ${props => props.theme.ipadBreakPoint} {
    h1 {
      margin-top: 100px;
    }
  }

  ${props => props.theme.smallBreakPoint} {
    h1 {
      font-size: 30px;
    }

    align-items: ${props => (props.fullHeight ? "center" : "flex-start")};
  }

  ${props => props.theme.smallBreakPoint} {
    h1 {
      font-size: 20px;
    }
  }
`

const MenuItem = styled.a`
  font-size: 13px;
  padding: 15px 8px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1.2px;
  &:after {
    content: "|";
    color: white;
    margin-left: 16px;
  }
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
    &:after {
      content: "";
      margin: 0;
    }
  }
  &:hover {
    color: ${props => props.theme.Yellow};
  }

  ${props => props.theme.ipadBreakPoint} {
    font-size: 12px;
    padding: 10px 2px;
  }

  ${props => props.theme.smallBreakPoint} {
    padding: 15px 0;
    text-align: center;
    &:after {
      content: "";
    }
  }
`

const MenuSeparator = styled.span`
  color: white;
  content: "/";
`

const Menu = styled.nav`
  flex: 1 0 auto;
  margin: 70px 0 40px 0;
  border-top: 1px solid white;

  ${props => props.theme.ipadBreakPoint} {
    margin-top: 0;
  }

  ${props => props.theme.smallBreakPoint} {
    display: none;
  }
`

export {
  Banner,
  Menu,
  MenuItem,
  MenuSeparator,
  BannerContainer,
}
