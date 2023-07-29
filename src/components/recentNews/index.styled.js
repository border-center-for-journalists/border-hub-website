import styled from "styled-components"

const RecentNewsSection = styled.section`
  min-height: 40vh;
  background-color: ${props => props.theme.Black};
`
const Container = styled.div`
  padding: 2em 0.5em;
  margin: 0 auto;

  ${props => props.theme.mdBP} {
    max-width: 700px;
    padding: 2em 1em;
  }

  ${props => props.theme.lgBP} {
    max-width: 768px;
  }

  ${props => props.theme.xlBP} {
    padding: 2em 0;
    max-width: 1000px;
  }
`
const SubtitleDark = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0.5em 1em;
  margin-bottom: 1em;
  border-bottom: 4px solid ${props => props.theme.Yellow};

  h2 {
    font-size: 1.3em;
    color: ${props => props.theme.White};
    margin: 0;
    padding: 0;
  }

  a {
    font-size: 0.8em;
    color: ${props => props.theme.Yellow};
    text-decoration: underline;
    font-style: italic;
    margin: 0;
    padding: 0;
  }
`
const RecentNewsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;

  ${props => props.theme.smBP} {
    flex-direction: column;
  }

  ${props => props.theme.mdBP} {
    flex-direction: column;
  }
`
const RecentNewsColumn = styled.div`
  display: flex;
  color: white;
  width: 100%;

  ${props => props.theme.lgBP} {
    width: 32%;
  }

  ${props => props.theme.xlBP} {
    width: 32%;
  }
`
export {
  RecentNewsSection,
  Container,
  SubtitleDark,
  RecentNewsList,
  RecentNewsColumn,
}
