import React, { Component } from "react"
import {
  NoticeContainer,
  NoticeHero,
  NoticeDetails,
  NoticeTitle,
  NoticeText,
  NoticeFooter,
} from "./index.styled"
import { SPECIAL_NEWS_URL, NEWS_URL } from "../../utils/constants"
import { getDate, getAuthor } from "../../utils/generic"

class SecondaryComponent extends Component {
  render() {
    const { notice, darkMode, size } = this.props
    const { type, data, uid } = notice
    const url = type === "noticias_especiales" ? SPECIAL_NEWS_URL : NEWS_URL
    const { banner, title, excerpt, author, custom_publishdate: date } = data

    return (
      <NoticeContainer direction="row">
        <a href={`/${url}/${uid}`}>
          <NoticeHero size={size}>
            <img src={banner.url || banner.thumbnail.url} alt={title.text} />
          </NoticeHero>
          <NoticeDetails darkMode={darkMode}>
            <NoticeTitle darkMode={darkMode}>{title.text}</NoticeTitle>
            <NoticeText darkMode={darkMode}>{excerpt.text}</NoticeText>
            <NoticeFooter darkMode={darkMode}>
              <i>
                Por <strong>{getAuthor(author)}</strong>
              </i>
              <br />
              {getDate(date)}
            </NoticeFooter>
          </NoticeDetails>
        </a>
      </NoticeContainer>
    )
  }
}

export default SecondaryComponent
