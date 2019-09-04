import React, { Component } from "react"
import { MainNewSmall, MainNewSmallText } from "./index.styled"
import {
  AuthorContainer,
  ImageWrapper,
  Paragraph,
  Col,
} from "../../theme/index.styled"
import moment from "moment"
import "moment/locale/es"
moment.locale("es")

class SubNewComponent extends Component {
  render() {
    return (
      <MainNewSmall>
        <hr />
        <Col>
          <ImageWrapper>
            <a href={`/${this.props.notice.uid}`}>
              <img
                alt="prueba"
                src={this.props.notice.data.banner.thumbnail.url}
              />
            </a>
          </ImageWrapper>
        </Col>
        <Col>
          <MainNewSmallText>
            <h3>
              <a href={`/${this.props.notice.uid}`}>
                {this.props.notice.data.title.text}
              </a>
            </h3>
            <Paragraph>{this.props.notice.data.excerpt.text}</Paragraph>
            <AuthorContainer show>
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
