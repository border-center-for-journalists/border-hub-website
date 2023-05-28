import React, { Component } from "react"
import {
  RecentIncidenceSection,
  Container,
  Subtitle,
  RecentNewsList,
  RecentNewsColumn,
} from "./index.styled"
import ColComponent from "../news/col"

class RecentIncidencias extends Component {
  render() {
    const discardNews = this.props.principalNotices.nodes.map((item) => item.uid)
    const news = this.props.notices.nodes.filter((item) => discardNews.indexOf(item.uid) === -1)

    return (
      <RecentIncidenceSection>
        <Container size="large">
          <Subtitle>
            <h2>Incidencias</h2>
            <a href={`/incidencia/`}>Ver todas</a>
          </Subtitle>
          <RecentNewsList>
            {news.map((notice, index) => (
              <RecentNewsColumn key={index}>
                <ColComponent section="incidencia" notice={notice} darkMode={false} />
              </RecentNewsColumn>
            ))}
          </RecentNewsList>
        </Container>
      </RecentIncidenceSection>
    )
  }
}

export default RecentIncidencias
