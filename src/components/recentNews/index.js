import React, { Component } from "react"
import {
  CustomTitle,
  RecentSection,
  PrincipalContainer,
  HrCol,
} from "./index.styled"
import SubNewComponent from "./subNews.js"
import { Container } from "../../theme/index.styled"

class RecentNews extends Component {
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
    console.log(count)
    return count >= 2 ? "white" : ""
  }
  render() {
    console.log("res", this.props)
    const mergeNotices = this.props.principalNotices.nodes
    return (
      <RecentSection>
        <Container size="large">
          <CustomTitle>
            <h3>
              <a href="/noticias">Ver todas las notas</a> Notas Recientes
            </h3>
          </CustomTitle>
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

export default RecentNews
