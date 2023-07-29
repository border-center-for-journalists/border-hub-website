import styled from "styled-components"

const RecentIncidenceSection = styled.section`
  min-height: 40vh;
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
const Subtitle = styled.div`
  background-color: ${props => props.theme.Yellow};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
  color: rgb(31, 25, 26);
  padding: 1em 1.5em;
  margin-bottom: 1em;

  h2 {
    font-size: 1.4em;
    font-weight: bold;
    margin: 0;
  }

  a {
    font-size: 0.8em;
    font-style: italic;
    font-weight: bold;
    color: rgb(31, 25, 26);
    text-decoration: underline;
  }

  ${props => props.theme.lgBP} {
    max-width: 320px;
  }

  ${props => props.theme.xlBP} {
    max-width: 320px;
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
  RecentIncidenceSection,
  Container,
  Subtitle,
  RecentNewsList,
  RecentNewsColumn,
}
