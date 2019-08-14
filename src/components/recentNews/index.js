import React, { Component } from "react"
import { CustomTitle, RecentSection, PrincipalContainer } from "./index.styled"
import SubNewComponent from "./subNews.js"
import { Col, Container } from "../../theme/index.styled"

class RecentNews extends Component {
  render() {
    return (
      <RecentSection>
        <Container size="large">
          <CustomTitle color={false}>
            <h3>Notas Recientes</h3>
          </CustomTitle>
          <PrincipalContainer>
            {this.props.notices.nodes.map(notice => (
              <Col key={notice.uid}>
                <SubNewComponent notice={notice} />
                <hr />
              </Col>
            ))}
          </PrincipalContainer>
        </Container>
      </RecentSection>
    )
  }
}

export default RecentNews
