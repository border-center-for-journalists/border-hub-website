import React from "react"
import { MediaWrapper } from "./index.styled"
import { Container } from "../../theme/index.styled"

const MediaNoticeContentComponent = ({ notice }) => {
  const sizes = {
    full: "full",
    middle: "",
    small: "medium",
  }
  const { primary } = notice
  const size = sizes[primary.embed_type]
  return (
    <React.Fragment>
      <Container size={size}>
        <MediaWrapper
          dangerouslySetInnerHTML={{ __html: primary.embed.html }}
        />
      </Container>
    </React.Fragment>
  )
}

export default MediaNoticeContentComponent
