import React from "react"
import { TextWrapper } from "./index.styled"
import { Container, Rows, Row } from "../../theme/index.styled"

const ColumnsNoticeContentComponent = ({ notice }) => {
  const { items } = notice
  const columns = items.map((item, index) => {
    return (
      <Row key={index} width="48%">
        <TextWrapper dangerouslySetInnerHTML={{ __html: item.content.html }} />
      </Row>
    )
  })
  return (
    <React.Fragment>
      <Container>
        <Rows wrap align="space-between">
          {columns}
        </Rows>
      </Container>
    </React.Fragment>
  )
}

export default ColumnsNoticeContentComponent
