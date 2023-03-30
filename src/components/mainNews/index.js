import React, { Component, Fragment } from "react"
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
import { SPECIAL_NEWS_URL, NEWS_URL } from '../../utils/constants'

import SubNewComponent from "./subNews.js"
import moment from "moment"
import "moment/locale/es"
moment.locale("es")

class MainNewsComponent extends Component {
  getDate = date => moment(date).format("MMMM DD")
  getComponent = (data, i) => {
    const noticeLen = Object.keys(this.props.notice).length
    const urlSectionType = (data.type === 'noticias_especiales') ? SPECIAL_NEWS_URL : NEWS_URL
    //console.log('DATA',data)
    if (noticeLen === i + 1) {
      return (
        <React.Fragment key={i}>
          <ImageWrapper>
            <a href={`/${urlSectionType}/${data.uid}/`}>
              <img alt={data.data.title.text} src={data.data.banner.url} />
            </a>
          </ImageWrapper>
          <TextContainer>
            <h2>
              <a href={`/${urlSectionType}/${data.uid}/`}>{data.data.title.text}</a>
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
        </React.Fragment>
      )
    } else {
      return <SubNewComponent key={i} darkMode={false} notice={data} />
    }
  }
  render() {
    if (this.props.notice.nodes.length === 0) return null
    
    const htmlContent = this.props.notice.nodes.map((data, index) =>
      this.getComponent(data, index)
    )
    const category = this.props.category
    return (
      <NewsContainer>
        <YellowTitle>
          {
            category
              ? (<Fragment><a href={`/categoria/${category.uid}`}>Ver todas</a> {category.document[0].data.title.text}</Fragment>)
              : (<Fragment><a href="/noticias/">Ver todas</a> Notas Principales</Fragment>)
          }
        </YellowTitle>
        <MainNewBig size="Common">{htmlContent}</MainNewBig>
      </NewsContainer>
    )
  }
}

export default MainNewsComponent
