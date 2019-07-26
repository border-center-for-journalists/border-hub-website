import React from "react"
import { TextWrapper } from "./index.styled"
import { Container } from "../../theme/index.styled"

const TextNoticeContentComponent = ({ notice }) => {
  const { primary } = notice
  console.log("Text", notice)
  return (
    <React.Fragment>
      <Container size="medium">
        <TextWrapper
          dangerouslySetInnerHTML={{ __html: primary.content.html }}
        />
      </Container>
    </React.Fragment>
  )
}

export default TextNoticeContentComponent
