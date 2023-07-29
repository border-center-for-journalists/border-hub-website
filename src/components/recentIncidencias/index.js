import React, { Component } from "react"
import {
  RecentIncidenceSection,
  Container,
  Subtitle,
  RecentNewsList,
  RecentNewsColumn,
} from "./index.styled"
import ColComponent from "../news/col"
import { Context } from "../../lang/context"
class RecentIncidencias extends Component {
  static contextType = Context
  render() {
    const discardNews = this.props.principalNotices.nodes.map((item) => item.uid)
    const news = this.props.notices.nodes.filter((item) => discardNews.indexOf(item.uid) === -1)

    return (
      <RecentIncidenceSection>
        <Container size="large">
          <Subtitle>
            <h2>{this.context.news.incidences}</h2>
            <a href={this.context.news.to_incidence}>{this.context.news.see_all}</a>
          </Subtitle>
          <RecentNewsList>
            {news.map((notice, index) => (
              <RecentNewsColumn key={index}>
                <ColComponent section={this.context.news.to_incidence} notice={notice} darkMode={false} />
              </RecentNewsColumn>
            ))}
          </RecentNewsList>
        </Container>
      </RecentIncidenceSection>
    )
  }
}

export default RecentIncidencias
