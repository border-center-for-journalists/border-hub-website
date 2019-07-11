import React, { Component } from "react"    
import { CustomTitle, RecentSection, PrincipalContainer } from "./index.styled"
import SubNewComponent from "./subNews.js"
import {Col} from "../../theme/index.styled"

class RecentNews extends Component {
    render() {
      return (
        <RecentSection>
          <CustomTitle color={false}>
            <h3>Notas Recientes</h3>
          </CustomTitle>
          <PrincipalContainer>
            <Col>
              <SubNewComponent/>
              <hr/>
            </Col>
            <Col>
              <SubNewComponent/>
              <hr/>
            </Col>
            <Col>
              <SubNewComponent/>
            </Col>
            <Col>
              <SubNewComponent/>
            </Col>
          </PrincipalContainer>
        </RecentSection>
      )
    }
}

export default RecentNews