import React from "react"
import { TextWrapper } from "./index.styled"
import { Container } from "../../theme/index.styled"

const TextNoticeContentComponent = ({ notice }) => {
  const getContent = () => {
    return notice.primary
      ? notice.primary.content.html
      : notice.data.content.html
  }
  const getColor = () => {
    return notice.primary ? "white" : "black"
  }

  return (
    <React.Fragment>
      <Container size="medium" xlStaticSize>
        <TextWrapper
          color={getColor()}
          dangerouslySetInnerHTML={{ __html: getContent() }}
        />
      </Container>
    </React.Fragment>
  )
}

export default TextNoticeContentComponent
