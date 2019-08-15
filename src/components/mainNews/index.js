import React, { Component } from "react"
import {
  NewsContainer,
  MainNewBig,
  SubTitleParagraph,
  TextContainer,
} from "./index.styled"
import {
  AuthorContainer,
  ImageWrapper,
  YellowTitle,
} from "../../theme/index.styled"
import SubNewComponent from "./subNews.js"
import moment from "moment"
import "moment/locale/es"
moment.locale("es")

class MainNewsComponent extends Component {
  getDate = date => moment(date).format("MMMM DD")
  getComponent = (data, i) => {
    const noticeLen = Object.keys(this.props.notice).length
    if (noticeLen === i + 1) {
      return (
        <div>
          <ImageWrapper>
            <a href={`/${data.uid}`}>
              <img alt={data.data.title.text} src={data.data.banner.url} />
            </a>
          </ImageWrapper>
          <TextContainer>
            <h2>
              <a href={`/${data.uid}`}>{data.data.title.text}</a>
            </h2>
            <SubTitleParagraph>{data.data.excerpt.text}</SubTitleParagraph>
            <AuthorContainer show>
              <i>
                {" "}
                Por <b> {data.data.author[0].name.text} </b>{" "}
              </i>{" "}
              <br />{" "}
              {moment(data.data.custom_publishdate).format("MMMM DD [|] YYYY")}
            </AuthorContainer>
          </TextContainer>
        </div>
      )
    } else {
      return <SubNewComponent notice={data} />
    }
  }
  render() {
    const htmlContent = this.props.notice.nodes.map((data, index) =>
      this.getComponent(data, index)
    )
    return (
      <NewsContainer>
        <YellowTitle>Notas Principales</YellowTitle>
        <MainNewBig size="Common">{htmlContent}</MainNewBig>
      </NewsContainer>
    )
  }
}

export default MainNewsComponent
