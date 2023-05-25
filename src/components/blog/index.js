import React from "react"
import {
  Section,
  Container,
  TitleYellow,
  Message,
} from "../../theme/index.styled"
import SubNewComponent from "../mainNews/subNews"

const BlogComponent = ({ data, darkMode, isFetching, fetchEnd, category }) => {
  return (
    <Section paddingTop={!category && darkMode === true} darkMode={darkMode}>
      <Container xlStaticSize wrapPadding>
        <TitleYellow>
          {category ? `${category.data.title.text}` : darkMode === true ? "Investigaciones Especiales" : "Noticias"}
        </TitleYellow>
        {data.map((notice, index) => (
          <SubNewComponent darkMode={darkMode} notice={notice} key={index} />
        ))}
        {isFetching && !fetchEnd ? (
          <Message darkMode={darkMode}>
            <span>Cargando noticias ...</span>
          </Message>
        ) : (
          ""
        )}
        {fetchEnd && !isFetching ? (
          <Message darkMode={darkMode}>
            <span>Se han cargado todas las noticias</span>
          </Message>
        ) : (
          ""
        )}
      </Container>
    </Section>
  )
}

export default BlogComponent
