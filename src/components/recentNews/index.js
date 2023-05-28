import React, { Component } from "react"
import {
  RecentNewsSection,
  Container,
  SubtitleDark,
  RecentNewsList,
  RecentNewsColumn,
} from "./index.styled"
import ColComponent from "../news/col"

class RecentNews extends Component {
  
  render() {
    const discardNews = this.props.principalNotices.nodes.map((item) => item.uid)
    const news = this.props.notices.nodes.filter((item) => discardNews.indexOf(item.uid) === -1)

    return (
      <RecentNewsSection>
        <Container>
          <SubtitleDark>
            <h2>Notas Recientes</h2>
            <a href="/noticias/">Ver todas</a>
          </SubtitleDark>

          <RecentNewsList>
            {news.map((notice, index) => (
              <RecentNewsColumn key={index}>
                <ColComponent notice={notice} darkMode={true} />
              </RecentNewsColumn>
            ))}
          </RecentNewsList>
        </Container>
      </RecentNewsSection>
    )
  }
}

export default RecentNews
