import React, { Component } from "react"
import {
  RecentNewsSection,
  Container,
  SubtitleDark,
  RecentNewsList,
  RecentNewsColumn,
} from "./index.styled"
import ColComponent from "../news/col"
import { Context } from "../../lang/context"
class RecentNews extends Component {
  static contextType = Context;
  
  render() {
    const discardNews = this.props.principalNotices.nodes.map((item) => item.uid)
    const news = this.props.notices.nodes.filter((item) => discardNews.indexOf(item.uid) === -1)

    return (
      <RecentNewsSection>
        <Container>
          <SubtitleDark>
            <h2>{this.context.news.recent_news}</h2>
            <a href={this.context.news.to_recent_news + "/"}>{this.context.news.see_all}</a>
          </SubtitleDark>

          <RecentNewsList>
            {news.map((notice, index) => (
              <RecentNewsColumn key={index}>
                <ColComponent notice={notice} section={this.context.news.to_recent_news} darkMode={true} />
              </RecentNewsColumn>
            ))}
          </RecentNewsList>
        </Container>
      </RecentNewsSection>
    )
  }
}

export default RecentNews
