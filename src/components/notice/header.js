import React from "react"
import {
  NoticeTitleWrapper,
  YellowText,
  ImageWrapper,
  Social,
} from "./index.styled"
import { Container, Rows } from "../../theme/index.styled"
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share"
import moment from "moment"
import "moment/locale/es"
moment.locale("es")

const HeaderNoticeComponent = ({ url, notice, align }) => {
  //const { publish_date, title, authors } = data
  const { title, banner } = notice.data
  const getAuthorName = () => {
    if (notice.data.authors) {
      return notice.data.authors.length > 0
        ? notice.data.authors[0].author_name.text
        : ""
    } else {
      return notice.data.author.length > 0
        ? notice.data.author[0].name.text
        : ""
    }
  }
  const date = notice.data.custom_publishdate
    ? notice.data.custom_publishdate
    : notice.last_publication_date

  return (
    <React.Fragment>
      <Container size="medium">
        <NoticeTitleWrapper align={align}>
          <h1>{title.text}</h1>
          <p>
            <i>
              Por{" "}
              <YellowText>
                <b>{getAuthorName()} |</b>
              </YellowText>{" "}
              En alianza con <u>Reforma</u>
            </i>
          </p>
          <p>{moment(date).format("MMMM DD, YYYY [|] h:mm a")}</p>
          <hr />
          <Rows rowM="row" rowS="row" rowXs="row" align="flex-end">
            <FacebookShareButton url={url}>
              <Social bigger className="icon-facebook" />
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              <Social className="icon-twitter" />
            </TwitterShareButton>
            <EmailShareButton url={url}>
              <Social className="icon-mail" />
            </EmailShareButton>
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
