import React, { Component } from "react"
import {
  IncidenceContainer,
  HeroContainer,
  TextContainer,
  Title,
  Date
} from "./index.styled"

import moment from "moment"
import "moment/locale/es"
moment.locale("es")

class SubNewComponent extends Component {
  format = (date) => moment(date).format("MMMM DD | YYYY")

  render() {
    const { uid, data } = this.props.notice
    const { title, banner, custom_publishdate } = data
    const section = "incidencia"

    return (
      <IncidenceContainer>
        <HeroContainer>
          <a href={`/${section}/${uid}/`}>
            <img
              src={banner.thumbnail.url}
              alt={banner.alt || banner.thumbnail.url || title.text}
            />
          </a>
        </HeroContainer>
        <TextContainer>
          <Title>
            <a href={`/${section}/${uid}/`}>{title.text}</a>
          </Title>
          <Date>{this.format(custom_publishdate)}</Date>
        </TextContainer>
      </IncidenceContainer>
    )
  }
}
export default SubNewComponent
