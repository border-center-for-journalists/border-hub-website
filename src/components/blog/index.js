import React from "react"
import {
  Section,
  Container,
  TitleYellow,
  Message,
} from "../../theme/index.styled"
import SubNewComponent from "../mainNews/subNews"

const BlogComponent = ({ data, darkMode, isFetching, fetchEnd, category }) => {
  let title = "";
  if (category) {
    title = category.data.title.text;
  } else if (!category) {
    title = "Investigaciones";
  }

  if (darkMode) {
    title += " Especiales";
  }

  return (
    <Section paddingTop darkMode={darkMode}>
      <Container xlStaticSize wrapPadding>
        <TitleYellow>
          {title}
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
