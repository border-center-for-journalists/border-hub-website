import React, { Component } from "react"
import { Footer } from "./index.styled"
import bc from "../../theme/images/borderhubcenter.jpg"
import bh from "../../theme/images/borderhubcenter.jpg"

class FooterComponent extends Component {
  render() {
    return (
      <Footer>
        <a href="/">
          <img alt="Border Center" src={bc} />
        </a>
        <a href="/">
          <img alt="Border Hub" src={bh} />
        </a>
      </Footer>
    )
  }
}

export default FooterComponent
