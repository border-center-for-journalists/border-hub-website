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

class MainComponent extends Component {
  render() {
    const { notice } = this.props
    const { type, data, uid } = notice
    const url = type === "noticias_especiales" ? SPECIAL_NEWS_URL : NEWS_URL
    const { banner, title, excerpt, author, custom_publishdate: date } = data

    return (
      <NoticeContainer direction="column">
        <a href={`/${url}/${uid}`}>
          <NoticeHero main size="cover">
            <img src={banner.url} alt={title.text} />
          </NoticeHero>
          <NoticeDetails main>
            <NoticeTitle>{title.text}</NoticeTitle>
            <NoticeText>{excerpt.text}</NoticeText>
            <NoticeFooter>
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

export default MainComponent
