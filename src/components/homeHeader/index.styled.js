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
  background-image: linear-gradient(to bottom, transparent 40%, black), url(${props => (props.bg ? props.bg : bg)});
  width: 100%;
  min-height: ${props => (props.fullHeight ? "600px" : "300px")};
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
  position: relative;
  bottom: 3em;

  b{
    color: ${props => props.theme.Yellow}
  }

`

export {
  Banner,
  BannerContainer,
  BannerImg,
}
