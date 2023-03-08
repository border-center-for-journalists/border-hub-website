import React, { Component } from "react"
import { MainNewSmall, MainNewSmallText, MobileParagraph } from "./index.styled"
import { AuthorContainer, ImageWrapper, Col } from "../../theme/index.styled"
import { SPECIAL_NEWS_URL, NEWS_URL } from '../../utils/constants'

import moment from "moment"
import "moment/locale/es"
moment.locale("es")

class SubNewComponent extends Component {
  render() {
    const urlSectionType = (this.props.notice.type==="noticias_especiales" || this.props.darkMode) ? SPECIAL_NEWS_URL : NEWS_URL
    return (
      <MainNewSmall>
        <hr />
        <Col>
          <ImageWrapper>
            <a href={`/${urlSectionType}/${this.props.notice.uid}/`}>
              <img
                alt="prueba"
                src={this.props.notice.data.banner.thumbnail.url}
              />
            </a>
          </ImageWrapper>
        </Col>
        <Col>
          <MainNewSmallText darkMode={this.props.darkMode}>
            <h3>
              <a href={`/${urlSectionType}/${this.props.notice.uid}/`}>
                {this.props.notice.data.title.text}
              </a>
            </h3>
            {/*<Paragraph>{this.props.notice.data.excerpt.text}</Paragraph>*/}
            <MobileParagraph>
              {this.props.notice.data.excerpt.text}
            </MobileParagraph>
            <AuthorContainer show yellowMode={this.props.darkMode}>
              <i>
                {" "}
                Por <b> {this.props.notice.data.author[0].name.text} </b>{" "}
              </i>{" "}
              <br />{" "}
              {moment(this.props.notice.data.custom_publishdate).format(
                "MMMM DD [|] YYYY"
              )}
            </AuthorContainer>
          </MainNewSmallText>
        </Col>
      </MainNewSmall>
    )
  }
}
export default SubNewComponent
