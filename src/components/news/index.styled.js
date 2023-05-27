import styled from "styled-components"

const NoticeContainer = styled.div`
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    position: relative;
  }

  ${props => props.theme.lgBP} {
    a {
      flex-direction: ${props => props.direction};
    }
  }

  ${props => props.theme.xlBP} {
    a {
      flex-direction: ${props => props.direction};
    }
  }
`
const NoticeHero = styled.div`
  position: relative;
  display: flex;
  flex: 1 1;
  overflow: hidden;
  ${props => (props.main ? "max-height: 400px;" : "")}

  img {
    bottom: 0;
    object-fit: ${props => props.size};
  }

  ${props => props.theme.lgBP} {
    margin: ${props => (props.main ? "0" : "0 0 0 1em")};
  }

  ${props => props.theme.xlBP} {
    margin: ${props => (props.main ? "0" : "0 0 0 1em")};
  }
`
const NoticeDetails = styled.div`
  display: flex;
  flex: 2 1;
  flex-direction: column;
  padding: 0.5em 1em;
  border: 3px solid
    ${props => (!props.darkMode ? props.theme.Black : props.theme.White)};
  background-color: ${props =>
    props.darkMode ? props.theme.Black : props.theme.White};
  margin-top: 0.5em;
  z-index: 2;

  ${props => props.theme.lgBP} {
    margin: ${props => (props.main ? "-1em 1em 0 !important" : "0 1em")};
  }

  ${props => props.theme.xlBP} {
    flex: 1 1;
    margin: ${props => (props.main ? "-1em 1em 0 !important" : "0 1em")};
  }
`
const NoticeTitle = styled.h2`
  font-size: 1.3em;
  font-weight: bold;
  position: relative;
  margin-bottom: 1.5em;
  color: ${props => (!props.darkMode ? props.theme.Black : props.theme.White)};

  &::after {
    content: "";
    position: absolute;
    bottom: -0.7em;
    left: 0;
    width: 66%;
    border-bottom: 4px solid
      ${props => (!props.darkMode ? props.theme.Black : props.theme.White)};
  }
`
const NoticeText = styled.p`
  font-size: 0.8em;
  margin-bottom: 0.5em;
  text-align: justify;
  color: ${props => (!props.darkMode ? props.theme.Black : props.theme.White)};
`
const NoticeFooter = styled.div`
  font-size: 0.8em;
  text-align: right;
  color: ${props => (!props.darkMode ? props.theme.Black : props.theme.White)};
`

export {
  NoticeContainer,
  NoticeHero,
  NoticeDetails,
  NoticeTitle,
  NoticeText,
  NoticeFooter,
}
