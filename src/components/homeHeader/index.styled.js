import styled from "styled-components"
import { Section, Container } from "../../theme/index.styled"
import bg from "../../theme/images/1.jpg"

const Banner = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
`
const BannerImg = styled.div`
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(to bottom, transparent 40%, black),
    url(${props => (props.bg ? props.bg : bg)});
  width: 100%;
  min-height: ${props => (props.fullHeight ? "600px" : "300px")};

  ${props => props.theme.ipadBreakPoint} {
    min-height: ${props => (props.fullHeight ? "440px" : "200px")};
  }

  ${props => props.theme.smallBreakPoint} {
    min-height: ${props => (props.fullHeight ? "340px" : "200px")};
  }
  ${props => props.theme.xlBreakPoint} {
  }
`

const BannerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.fullHeight ? "flex-end" : "flex-start")};
  align-items: ${props => (props.fullHeight ? "flex-end" : "flex-start")};
  max-width: ${props => props.theme.ContainerLarge + 30}px;
  position: relative;
  bottom: 3em;
  padding: 0 24px;

  b {
    color: ${props => props.theme.Yellow};
  }

  ${props => props.theme.largeBreakPoint} {
    max-width: ${props => props.theme.ContainerExtraLarge + 30}px;
  }
  ${props => props.theme.xlBreakPoint} {
    bottom: 0;
  }
`

export { Banner, BannerContainer, BannerImg }
