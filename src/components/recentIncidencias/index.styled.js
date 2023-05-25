import styled from "styled-components"
import {
  Section,
  Col,
} from "../../theme/index.styled"

const RecentSection = styled(Section)`
  padding: 35px 24px;
  background-color: white;
`;
const PrincipalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${props => props.theme.ipadBreakPoint} {
    margin: 0 auto;
  }
  ${props => props.theme.largeBreakPoint} {
    max-width: ${props => props.theme.ContainerExtraLarge + 30}px;
  }
`;
const HrCol = styled(Col)`
  padding-bottom: 20px;
  max-width:32%;
  border-bottom: 1px solid ${props => props.color};
  ${props => props.theme.smallBreakPoint} {
    max-width: 100%;
  }
`;
const SubTitle = styled.div`
  background-color: ${props => props.theme.Yellow};
  max-width: 320px;
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
    line-height: 1.16;
    margin: 0;
  }

  a {
    font-size: 0.8em;
    font-style: italic;
    font-weight: bold;
    color: rgb(31, 25, 26);
    text-decoration: underline;
  }
`

const IncidenceContainer = styled.div`
  height: 100%;
`;
const HeroContainer = styled.div`
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
`;
const TextContainer = styled.div`
  margin-top: 1em;
  height: calc(100% - 180px - 1em);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  line-height: 1.16;
  margin: 0 0 0.5em;
  a {
    color: rgb(31, 25, 26);
    text-decoration: none;
  }
`;
const Date = styled.small`
  font-size: 0.8em;
`;

export {
  PrincipalContainer,
  RecentSection,
  HrCol,
  SubTitle,
  IncidenceContainer,
  HeroContainer,
  TextContainer,
  Title,
  Date
}
