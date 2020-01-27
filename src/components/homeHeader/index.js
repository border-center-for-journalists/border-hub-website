import React, { Component } from "react"
import { Banner, BannerContainer, BannerImg } from "./index.styled"
import bodyImage from "../../theme/images/1.jpg"
import {
  AuthorContainer,
  Rows,
  Row,
  TitleContainer,
  Paragraph,
} from "../../theme/index.styled"
import { SPECIAL_NEWS_URL, NEWS_URL } from '../../utils/constants'

import moment from "moment"
import "moment/locale/es"

moment.locale("es")

class HomeHeaderComponent extends Component {
  getAuthor = notice => {
    return notice.data.author.length > 0 ? notice.data.author[0].name.text : ""
  }
  getDate = notice => {
    return moment(notice.data.custom_publishdate).format("MMMM DD [|] YYYY")
  }
  render() {
    const notice = this.props.bannerNotice[0]
    const urlSectionType = (notice.type === 'noticias_especiales') ? SPECIAL_NEWS_URL : NEWS_URL
    const rows =
      this.props.bannerNotice.length === 0 ? (
        <Rows />
      ) : (
          <Rows>
            <Row shrink shrinkXl>
              <AuthorContainer main={true} show={true} color={true}>
                <i>
                  Por <b> {this.getAuthor(notice)}</b>
                </i>
                <br /> {this.getDate(notice)}
              </AuthorContainer>
            </Row>
            <Row shrink shrinkXl>
              <TitleContainer fullHeight={true}>
                <h1>
                  <a href={`/${urlSectionType}/${notice.uid}/`}>{notice.data.title.text}</a>
                </h1>
                <AuthorContainer show={false} color={true}>
                  <i>
                    Por <b> {this.getAuthor(notice)}</b>
                  </i>
                  <br /> {this.getDate(notice)}
                </AuthorContainer>
                <Paragraph>{notice.data.excerpt.text}</Paragraph>
              </TitleContainer>
            </Row>
          </Rows>
        )
    const banner = notice.data.banner.url ? notice.data.banner.url : bodyImage
    return (
      <Banner>
        <BannerImg fullHeight={true} bg={banner} />
        <BannerContainer fullHeight={false}>{rows}</BannerContainer>
      </Banner>
    )
  }
}

export default HomeHeaderComponent
