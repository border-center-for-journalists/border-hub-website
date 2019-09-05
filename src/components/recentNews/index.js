import React, { Component } from "react"
import {
  CustomTitle,
  RecentSection,
  PrincipalContainer,
  HrCol,
} from "./index.styled"
import SubNewComponent from "./subNews.js"
import { Col, Container } from "../../theme/index.styled"

class RecentNews extends Component {
  isAllowed = (notice, mergeNotices) => {
    const r = mergeNotices.reduce((result, item) => {
      return result && item.uid === notice.uid ? false : result
    }, true)
    return r
  }
  render() {
    // const mergeNotices = this.props.bannerNotices.nodes.concat(
    //   this.props.principalNotices.nodes
    // )
    const mergeNotices = this.props.principalNotices.nodes
    return (
      <RecentSection>
        <Container size="large">
          <CustomTitle color={false}>
            <h3>Notas Recientes</h3>
          </CustomTitle>
          <PrincipalContainer>
            {this.props.notices.nodes.map(notice =>
              this.isAllowed(notice, mergeNotices) ? (
                <HrCol key={notice.uid}>
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
