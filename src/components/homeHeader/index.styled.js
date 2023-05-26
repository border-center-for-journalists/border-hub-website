import styled from "styled-components"
import bg from "../../theme/images/1.jpg"

const Banner = styled.section`
  display: flex;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(to bottom, transparent, 50%, black), url(${props => props.bg || bg});
  min-height: 100vh;
  text-align: right;

  ${props => props.theme.xlBP} {
    min-height: 80vh;
    margin-top: 0px;
  }
`
const BannerContainer = styled.div`
  display: flex;
  align-self: end;
  max-width: 1000px;
  margin: 0 auto 1em;
  padding: 0 1em;

  ${props => props.theme.lgBP} {
    padding: 0 2em;
  }

  ${props => props.theme.xlBP} {
    padding: 0;
  }
`
const BannerTitle = styled.h2`
  display: block;
  padding-bottom: 0.5em;
  border-bottom: 6px solid ${props => props.theme.Yellow};
  margin-bottom: 0.4em;
  text-align: right;
  margin-top: 80px;
  font-size: 1.5em;
  a {
    text-decoration: none;
    color: white;
  }
  ${props => props.theme.mdBP} {
    font-size: 2em;
  }
  ${props => props.theme.lgBP} {
    font-size: 2.5em;
    margin-top: 0px;
  }
  ${props => props.theme.xlBP} {
    font-size: 2.5em;
  }
`
const BannerColumns = styled.div`
  display: flex;
  flex-direction: column;
`
const BannerAuthor = styled.div`
  display: flex;
  justify-content: end;
  color: white;
  font-size: 0.9em;

  div {
    text-align: right;
  }

  i {
    color: ${props => props.theme.Yellow};
  }
`
const BannerText = styled.p`
  display: flex;
  margin-bottom: 1em;
  color: white;
  font-size: 1em;
  line-height: 1.8em;
  ${props => props.theme.xlBP} {
    padding-left: 2.5em;
  }
`

export { Banner, BannerContainer, BannerTitle, BannerAuthor, BannerText, BannerColumns }
