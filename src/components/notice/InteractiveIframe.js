import React from "react"
import styled from 'styled-components';

const Container = styled.div`
  width: 80% !important;
  margin: 0 auto;
  ${props => (props.darkMode ? ".recharts-legend-wrapper{color: #fff;}" : "")}
  ${props => (props.padding ? "padding: 25px 0;" : "")}
  ${props => (props.wrapPadding ? "padding: 25px;" : "")}

  iframe {
    height: 100vh !important;
    width: 100% !important;
    overflow-y: hidden !important;
  }
`

const TextNoticeContentComponent = ({ notice: { primary } }) => {
  const { iframe_interactivo: { html: innerHtml } } = primary;
  return (
    <Container size="large" xlStaticSize dangerouslySetInnerHTML={{ __html: innerHtml }} />
  )
}

export default TextNoticeContentComponent
