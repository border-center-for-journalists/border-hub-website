import React from "react"
import { QuoteWrapper, TextWrapper } from "./index.styled"
import { Container } from "../../theme/index.styled"

const QuoteNoticeContentComponent = ({ notice }) => {
  const { primary } = notice
  console.log("notice", primary)
  return (
    <React.Fragment>
      <Container size="medium">
        <QuoteWrapper>
          <TextWrapper
            dangerouslySetInnerHTML={{ __html: primary.content.html }}
          />
        </QuoteWrapper>
      </Container>
    </React.Fragment>
  )
}

export default QuoteNoticeContentComponent
