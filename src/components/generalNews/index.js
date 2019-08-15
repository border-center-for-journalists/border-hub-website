import React, { Component } from "react"
import { Container } from "../../theme/index.styled"
import { GeneralNewsSection, GeneralTitle } from "./index.styled"

class GeneralComponent extends Component {
  render() {
    const { title, content } = this.props.data
    return (
      <GeneralNewsSection>
        <Container>
          <GeneralTitle>
            <h1>{title.text}</h1>
            <div dangerouslySetInnerHTML={{ __html: content.html }} />
          </GeneralTitle>
        </Container>
      </GeneralNewsSection>
    )
  }
}

export default GeneralComponent
