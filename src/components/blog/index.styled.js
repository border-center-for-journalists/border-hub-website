import styled from "styled-components"

const MainNewsSection = styled.section`
  min-height: 100vh;
  padding: 0 0.5em;
  margin: 1em auto;

  ${props => props.theme.mdBP} {
    max-width: 700px;
    padding: 0 1em;
  }

  ${props => props.theme.lgBP} {
    max-width: 768px;
  }

  ${props => props.theme.xlBP} {
    padding: 0;
    max-width: 800px;
  }
`
const Subtitle = styled.div`
  background-color: ${props => props.theme.Yellow};
  color: rgb(31, 25, 26);
  padding: 1em 1.5em;
  margin: 1em auto;

  h1 {
    font-size: 1.5em;
    font-weight: bold;
    line-height: 1.16;
    text-align: center;
    margin: 0;
  }
`
const NewsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0;
    padding: 0.5em 0;
  }
`

export {
  MainNewsSection,
  Subtitle,
  NewsList
}