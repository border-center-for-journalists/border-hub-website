import styled from "styled-components"
import bg from "../../theme/images/1.jpg"

const SpecialSection = styled.section`
  // background: linear-gradient(to bottom, rgba(31, 25, 26, 0.6), 80%, rgba(153, 18, 18, 0.6)),
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), 100%,rgba(0, 0, 0, 0)),
    url(${props => (props.bg ? props.bg : bg)});
  background-position: center;
  background-size: cover;
  a {
    text-decoration: none;
  }

`
const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  padding: 2em 0.5em;
  margin: 0 auto;

  ${props => props.theme.mdBP} {
    max-width: 700px;
    padding: 2em 1em;
  }

  ${props => props.theme.lgBP} {
    min-height: 70vh;
    max-width: 768px;
  }

  ${props => props.theme.xlBP} {
    min-height: 70vh;
    padding: 2em 0;
    max-width: 1000px;
  }
`
const ArrowContainer = styled.div`
  ${props => props.rotate ? "transform: rotate(180deg);" : ""}
`
const Arrow = styled.i`
  display: none;

  ${props => props.theme.lgBP} {
    font-size: 80px;
    color: #fff;
    display: block;

    :hover {
      cursor: pointer;
    }
  }

  ${props => props.theme.xlBP} {
    font-size: 80px;
    color: #fff;
    display: block;

    :hover {
      cursor: pointer;
    }
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
const NewsContainer = styled.div`
  display: flex;
  flex: 1 1;
  padding: 0;

  ${props => props.theme.lgBP} {
    padding: 0 1em;
  }

  ${props => props.theme.xlBP} {
    padding: 0 1em;
  }
`
const NewsTitle = styled.h3`
  margin: 0 0 1em;
  text-align: right;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.7em;
    right: 0;
    width: 66%;
    border-bottom: 4px solid ${props => props.theme.Yellow};
  }

  a {
    color: ${props => props.theme.White};
    text-decoration: none;
  }
`
const NewsContent = styled.p`
  font-size: 0.8em;
  color: ${props => props.theme.White};
  text-align: right;
  line-height: 1.8em;
  margin: 1em 0 0;
  padding: 0;
  background-color: transparent;
  position: relative;
  z-index: 1;

  ${props => props.theme.xlBP} {
    font-size: 0.9em;
  }

  ${props => props.theme.xlBP} {
    font-size: 1em;
  }
`
const SliderContainer = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
  justify-content: end;

  .slick-slider {
    display: flex !important;
    flex-direction: row !important;
    flex: 1 1 !important;
    align-items: center;
  }

  .slick-list, .slick-slide, .slick-list {
    display: flex !important;
    flex-direction: column !important;
    flex: 1 1 !important;
    justify-content: end;
  }

  

  .slick-track {
    display: flex !important;
    align-items: end;
  }
`

export {
  SpecialSection,
  CustomContainer,
  ArrowContainer,
  Arrow,
  Subtitle,
  NewsContainer,
  NewsTitle,
  NewsContent,
  SliderContainer
}
