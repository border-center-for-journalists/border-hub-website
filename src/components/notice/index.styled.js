import styled from "styled-components"

const NoticeSection = styled.section`
  padding-top: 120px;
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
  flex: 1 0 32%;
  color: white;
  ul {
    list-style: none;
    padding: 0;
    font-size: 15px;
    margin: 0;
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
`

export {
  NoticeTitleWrapper,
  NoticeSection,
  Share,
  YellowText,
  NoticeSectionTitle,
  Author,
  AuthorTitle,
  AuthorRol,
}
