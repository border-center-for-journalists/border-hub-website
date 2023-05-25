import React, { Component } from "react"
import {
  SubTitle,
  RecentSection,
  PrincipalContainer,
  HrCol,
} from "./index.styled"
import SubNewComponent from "./subNews.js"
import { Container } from "../../theme/index.styled"

class RecentIncidencias extends Component {
  isAllowed = (notice, mergeNotices) => {
    const r = mergeNotices.reduce((result, item) => {
      return result && item.uid === notice.uid ? false : result
    }, true)
    return r
  }
  getColor = mergeNotices => {
    let count = 0
    this.props.notices.nodes.map(notice =>
      this.isAllowed(notice, mergeNotices) ? (count += 1) : ""
    )
    return count >= 2 ? "white" : ""
  }
  render() {
    const mergeNotices = this.props.principalNotices.nodes
    return (
      <RecentSection>
        <Container size="large">
          <SubTitle>
            <h2>Incidencias</h2>
            <a href={`/incidencia/`}>Ver todas</a>
          </SubTitle>
          <PrincipalContainer>
            {this.props.notices.nodes.map(notice =>
              this.isAllowed(notice, mergeNotices) ? (
                <HrCol color={this.getColor(mergeNotices)} key={notice.uid}>
                  <SubNewComponent notice={notice} />
                </HrCol>
              ) : (
                  ""
                )
            )}
          </PrincipalContainer>
        </Container>
      </RecentSection>
    )
  }
}

export default RecentIncidencias
