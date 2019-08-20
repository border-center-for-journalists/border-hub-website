import React from "react"
import {
  NoticeTitleWrapper,
  Share,
  YellowText,
  ImageWrapper,
  Social,
} from "./index.styled"
import { Container, Rows } from "../../theme/index.styled"
import { FacebookShareButton, TwitterShareButton } from "react-share"
import img from "../../theme/images/1.jpg"

const HeaderNoticeComponent = ({ notice, align }) => {
  //const { publish_date, title, authors } = data
  {console.log(notice)}
  const { title, banner } = notice.data
  const getAuthorName = () => {
    if(notice.data.authors){
      return notice.data.authors.length > 0
      ? notice.data.authors[0].author_name.text
      : ""
    }
    else{
      return notice.data.author.length > 0
      ? notice.data.author[0].name.text
      : ""
    }

  } 
  return (
    <React.Fragment>
      <Container size="medium">
        <NoticeTitleWrapper align={align}>
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
            <FacebookShareButton>
              <Social bigger className="icon-facebook" />
            </FacebookShareButton>
            <TwitterShareButton>
              <Social className="icon-twitter" />
            </TwitterShareButton>
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
