import React from "react"
import {
  NoticeTitleWrapper,
  Share,
  YellowText,
  ImageWrapper,
} from "./index.styled"
import { Container, Rows } from "../../theme/index.styled"
import img from "../../theme/images/1.jpg"

const HeaderNoticeComponent = ({ notice }) => {
  //const { publish_date, title, authors } = data
  const { title, banner } = notice.data
  const getAuthorName = () => {
    return notice.data.authors.length > 0
      ? notice.data.authors[0].author_name.text
      : ""
  }
  return (
    <React.Fragment>
      <Container size="medium">
        <NoticeTitleWrapper align={title.align}>
          <h1>{title.text}</h1>
          <p>
            <i>
              Por <YellowText>{getAuthorName()} |</YellowText> En alianza con{" "}
              <u>Reforma</u>
            </i>
          </p>
          <p>Marzo 12, 2019 | 13:45</p>
          <hr />
          <Rows align="flex-end">
            <Share>a</Share>
            <Share>a</Share>
            <Share>a</Share>
            <Share>a</Share>
          </Rows>
        </NoticeTitleWrapper>
      </Container>
      {banner.url ? (
        <ImageWrapper>
          <img alt={banner.alt} src={banner.url} />
        </ImageWrapper>
      ) : (
        ""
      )}
    </React.Fragment>
  )
}

export default HeaderNoticeComponent
