import React, { Component } from "react"
import {
  NoticeContainer,
  NoticeHero,
  NoticeDetails,
  NoticeTitle,
  NoticeText,
  NoticeFooter,
} from "./index.styled"
import { getDate, getAuthor } from "../../utils/generic"
import { Context } from "../../lang/context"
class MainComponent extends Component {
  static contextType = Context
  render() {
    const { notice } = this.props
    const { type, data, uid } = notice
    const url = type === "noticias_especiales" ? this.context.news.to_specials : this.context.to_recent_news
    const { banner, title, excerpt, author, custom_publishdate: date } = data

    return (
      <NoticeContainer direction="column">
        <a href={`${url}/${uid}`}>
          <NoticeHero main size="cover">
            <img src={banner.url} alt={title.text} />
          </NoticeHero>
          <NoticeDetails main>
            <NoticeTitle>{title.text}</NoticeTitle>
            <NoticeText>{excerpt.text}</NoticeText>
            <NoticeFooter>
              <i>
                {this.context.news.by} <strong>{getAuthor(author, this.context.locale)}</strong>
              </i>
              <br />
              {getDate(date, this.context.locale)}
            </NoticeFooter>
          </NoticeDetails>
        </a>
      </NoticeContainer>
    )
  }
}

export default MainComponent
