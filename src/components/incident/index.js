import React, {useContext} from "react"
import {
  Section,
  Container,
  Title,
  Message,
} from "../../theme/index.styled"
import IncidentBox from "./incidentBox"
import { Context } from "../../lang/context"

const BlogComponent = ({ data, darkMode, isFetching, fetchEnd, category }) => {
  const lang = useContext(Context)

  return (
    <Section paddingTop darkMode={darkMode}>
      <Container wrapPadding>  
        <Title>
          {category ? `${category.data.title.text}` : lang.news.incidences}
        </Title>
        {data.map((notice, index) => (
          <IncidentBox darkMode={darkMode} notice={notice} key={index} />
        ))}
        {isFetching && !fetchEnd ? (
          <Message darkMode={darkMode}>
            <span>{lang.news.loading}...</span>
          </Message>
        ) : (
          ""
        )}
        {fetchEnd && !isFetching ? (
          <Message darkMode={darkMode}>
            <span>{lang.news.all_results}</span>
          </Message>
        ) : (
          ""
        )}
      </Container>
    </Section>
  )
}

export default BlogComponent
