import React from "react"
import { QuoteWrapper, TextWrapper } from "./index.styled"
import { Container } from "../../theme/index.styled"

const QuoteNoticeContentComponent = ({ notice }) => {
  const { primary } = notice
  return (
    <React.Fragment>
      <Container size="medium">
        <QuoteWrapper color={primary.content.color}>
          <TextWrapper
            dangerouslySetInnerHTML={{ __html: primary.content.html }}
            color={primary.content.color}
          />
        </QuoteWrapper>
      </Container>
    </React.Fragment>
  )
}

export default QuoteNoticeContentComponent
