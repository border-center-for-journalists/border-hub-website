import React, { Component } from "react"
import { MainNewSmall, MainNewSmallText } from "./index.styled"
import {
  AuthorContainer,
  ImageWrapper,
  Paragraph,
  Col,
} from "../../theme/index.styled"
class SubNewComponent extends Component {
  render() {
    const Months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ]
    let date = new Date(this.props.notice.data.custom_publishdate)
    let trueDate =
      Months[date.getMonth()] +
      " " +
      date.getDate() +
      " | " +
      date.getFullYear()
    return (
      <MainNewSmall>
        <hr />
        <Col>
          <ImageWrapper>
            <a href={`/${this.props.notice.uid}`}>
              <img alt="prueba" src={this.props.notice.data.banner.thumbnail.url} />
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
              <br /> {trueDate}
            </AuthorContainer>
          </MainNewSmallText>
        </Col>
      </MainNewSmall>
    )
  }
}
export default SubNewComponent
