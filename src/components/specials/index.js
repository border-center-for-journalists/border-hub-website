import React, { Component } from "react"
import {
  SpecialSection,
  CustomTitle,
  CustomContainer,
  CustomSecondTitle,
  BigArrow,
} from "./index.styled"
import { Rows, Row, Paragraph } from "../../theme/index.styled"

class SpecialNews extends Component {
  render() {
    console.log(this.props.notice)
    return (
      <SpecialSection bg={this.props.notice.nodes[0].data.banner.url}>
        <CustomContainer size="large">
          <CustomTitle>Especiales</CustomTitle>
          <Rows>
            <Row shrink>
              <CustomSecondTitle fullHeight={false}>
                <h1>
                  <a href={`/${this.props.notice.nodes[0].uid}`}>
                    {this.props.notice.nodes[0].data.title.text}
                  </a>
                </h1>
                <Paragraph>
                  {this.props.notice.nodes[0].data.excerpt.text}
                </Paragraph>
              </CustomSecondTitle>
            </Row>
            <Row>
              <a href={`/${this.props.notice.nodes[0].uid}`}>
                <BigArrow className="icon-arrow-right" />
              </a>
            </Row>
          </Rows>
        </CustomContainer>
      </SpecialSection>
    )
  }
}

export default SpecialNews
