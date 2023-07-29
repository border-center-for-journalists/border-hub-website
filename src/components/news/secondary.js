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
class SecondaryComponent extends Component {
  static contextType = Context
  render() {
    const { notice, darkMode, size, url } = this.props
    const { type, data, uid } = notice
    const { banner, title, excerpt, author, custom_publishdate: date } = data

    const rewriteUrl =
      type !== undefined
        ? type === "noticias_especiales"
          ? this.context.news.to_specials
          : this.context.news.to_recent_news
        : null

    return (
      <NoticeContainer direction="row">
        <a href={`${rewriteUrl || url}/${uid}`}>
          <NoticeHero size={size}>
            <img src={banner.url || banner.thumbnail.url} alt={title.text} />
          </NoticeHero>
          <NoticeDetails darkMode={darkMode}>
            <NoticeTitle darkMode={darkMode}>{title.text}</NoticeTitle>
            <NoticeText darkMode={darkMode}>{excerpt.text}</NoticeText>
            <NoticeFooter darkMode={darkMode}>
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

export default SecondaryComponent
