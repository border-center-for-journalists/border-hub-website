import styled from "styled-components"

const NoticeSection = styled.section`
  padding-top: 120px;
`

const Divider = styled.hr`
  margin: 30px 10px;
  border: 0 none;
  border-top: 1px solid ${props => props.theme.DarkGray};
`

const NoticeTitleWrapper = styled.div`
  display: block;
  text-align: center;
  color: white;
  p {
    font-size: 15px;
    line-height: 1.67;
    margin: 0;
  }
  h1 {
    color: white;
  }
  hr {
    border: 0 none;
    border: 0 none;
    border-top: 4px solid ${props => props.theme.Yellow};
    margin-top: 25px;
    margin-bottom: 5px;
  }
`

const Share = styled.a`
  margin-left: 20px;
  color: white;
  font-size: 20px;
  padding: 5px;
`

const YellowText = styled.span`
  color: ${props => props.theme.Yellow};
`

const NoticeSectionTitle = styled.h4`
  color: white;
  font-size: 23px;
  margin-bottom: 25px;
  text-align: center;
`

const Author = styled.div`
  flex: 0 1 32%;
  color: white;
  ul {
    list-style: none;
    padding: 0;
    font-size: 15px;
    margin: 0;
    li {
      margin: 0;
    }
  }
`

const AuthorTitle = styled.h5`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  font-style: italic;
  margin: 0;
`

const AuthorRol = styled.p`
  font-size: 12px;
  letter-spacing: 2.4px;
  text-align: center;
  margin: 0;
  text-transform: uppercase;
`

const AuthorProfile = styled.div`
  display: block;
  width: 60px;
  height: 60px;
  margin: 5px auto 10px;
  border-radius: 50%;
  overflow: hidden;
`

const ImageWrapper = styled.div`
  display: block;
  img {
    display: block;
    width: 100%;
  }
`

const TextWrapper = styled.div`
  padding: 15px 0;
  * {
    color: white;
  }
  img {
    display: block;
  }
`

const QuoteWrapper = styled.div`
  margin: 20px 0;
  padding: 5px 70px;
  font-style: italic;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  p {
    margin: 5px 0;
  }
`

const MediaWrapper = styled.div`
  display: block;
  position: relative;
  margin: 0px;
  width: 100%;
  padding: 25% 0;
  box-sizing: border-box;
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    display: block;
  }
`

export {
  NoticeTitleWrapper,
  NoticeSection,
  Divider,
  Share,
  YellowText,
  NoticeSectionTitle,
  Author,
  AuthorTitle,
  AuthorRol,
  AuthorProfile,
  ImageWrapper,
  TextWrapper,
  QuoteWrapper,
  MediaWrapper,
}
