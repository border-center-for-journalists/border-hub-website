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
`
const NoticeText = styled.p`
  font-size: 0.8em;
  margin-bottom: 0.5em;
  text-align: justify;
  color: ${props => (!props.darkMode ? props.theme.Black : props.theme.White)};

  &::after {
    content: "";
    position: absolute;
    bottom: 0em;
    left: 0;
    width: 100%;
    border-bottom: 3px solid ${props => (!props.darkMode ? props.theme.Yellow : props.theme.White)};
  }
`
const NoticeFooter = styled.div`
  font-size: 0.8em;
  text-align: right;
  color: ${props => (!props.darkMode ? props.theme.Black : props.theme.White)};
`

const ColContainer = styled.div`
  height: 100%;
  margin-bottom: 1em;
  border-bottom: 3px solid ${props => (props.theme.Yellow)};
`
const ColHero = styled.div`
  height: 180px;
  position: relative;
  overflow: hidden;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ColDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 180px - 1em);
  padding: 0 1em;
  margin-top: 1em;
}
`
const ColTitle = styled.h3`
  position: relative;
  font-size: 1.1em;
  font-weight: bold;
  line-height: 1.16;
  margin: 0 0 0.5em;

  a {
    color: ${props => props.darkMode ? props.theme.White : props.theme.Black};
    text-decoration: none;
  }
`
const ColText = styled.div`
  color: ${props => props.darkMode ? props.theme.White : props.theme.Black};
  font-size: 0.8em;
  margin-top: 0.75em;
  height: 80px;
  overflow: hidden;
  display: none;

  p {
    margin: 0;
  }

  ${props => props.theme.lgBP} {
    display: block;
  }

  ${props => props.theme.xlBP} {
    display: block;
  }
`
const ColFooter = styled.small`
  color: ${props => props.darkMode ? props.theme.Yellow : props.theme.Black};
  font-size: 0.8em;
  margin: 0.75em 0;

  ${props => props.theme.lgBP} {
    margin: 0;
  }

  ${props => props.theme.xlBP} {
    margin: 0;
  }
`

export {
  NoticeContainer,
  NoticeHero,
  NoticeDetails,
  NoticeTitle,
  NoticeText,
  NoticeFooter,
  ColContainer,
  ColHero,
  ColDetails,
  ColTitle,
  ColText,
  ColFooter,
}
