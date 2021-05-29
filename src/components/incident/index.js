import React from "react"
import {
  Section,
  Container,
  Title,
  Message,
} from "../../theme/index.styled"
import IncidentBox from "./incidentBox"

const BlogComponent = ({ data, darkMode, isFetching, fetchEnd, category }) => {
  return (
    <Section paddingTop darkMode={darkMode}>
      <Container wrapPadding>  
        <Title>
          {category ? `${category.data.title.text}` : 'Incidencias'}
        </Title>
        {data.map((notice, index) => (
          <IncidentBox darkMode={darkMode} notice={notice} key={index} />
        ))}
        {isFetching && !fetchEnd ? (
          <Message darkMode={darkMode}>
            <span>Cargando incidencias ...</span>
          </Message>
        ) : (
          ""
        )}
        {fetchEnd && !isFetching ? (
          <Message darkMode={darkMode}>
            <span>Se han cargado todas las incidencias</span>
          </Message>
        ) : (
          ""
        )}
      </Container>
    </Section>
  )
}

export default BlogComponent
