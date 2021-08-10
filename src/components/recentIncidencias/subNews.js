import React, { Component } from "react"
import {
  NewsContainer,
  NewsText,
  DateText,
  ImgCol,
  TextCol,
  YellowText,
} from "./index.styled"
import { SPECIAL_NEWS_URL, NEWS_URL } from '../../utils/constants'
import { ImageWrapper, Paragraph } from "../../theme/index.styled"
import tempImg from "../../theme/images/3.jpg"

import moment from "moment"
import "moment/locale/es"
moment.locale("es")

class SubNewComponent extends Component {
  getDate = date => moment(date).format("MMMM DD")
  getYear = date => moment(date).format("YYYY")
  getTime = date => moment(date).format("h:mm a")
  render() {
    const {
      title,
      banner,
      custom_publishdate,
    } = this.props.notice.data
    const limit = 50
    const urlSectionType = 'incidencia'
    //console.log('NOTICE',this.props.notice)

    return (
      <NewsContainer>
        <ImgCol>
          <ImageWrapper>
            <a href={`/${urlSectionType}/${this.props.notice.uid}/`}>
              <img src={banner.thumbnail.url} alt={banner.thumbnail.url || banner.alt || ''} />
            </a>
          </ImageWrapper>
        </ImgCol>
        <TextCol>
          <NewsText>
            <h3>
              <a href={`/${urlSectionType}/${this.props.notice.uid}/`}>{title.text}</a>
            </h3>
         
          </NewsText>
          <DateText>
            {this.getDate(custom_publishdate)} |{" "}
            {this.getYear(custom_publishdate)}
          </DateText>
        </TextCol>
        
      </NewsContainer>
    )
  }
}
export default SubNewComponent
