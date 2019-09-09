import React, { Component } from "react"
import { Footer, Social } from "./index.styled"
import bc from "../../theme/images/borderhubcenter.jpg"
import bh from "../../theme/images/logo.jpg"

class FooterComponent extends Component {
  render() {
    const { facebook, twitter, youtube, menu } = this.props.data
    return (
      <Footer>
        <a href="/">
          <img alt="Border Hub" src={bh} />
        </a>
        <a href="/">
          <img alt="Border Center" src={bc} />
        </a>
        <Social
          target="_blank"
          bigger
          href={facebook.url}
          className="icon-facebook"
        />
        <Social target="_blank" href={twitter.url} className="icon-twitter" />
        <Social target="_blank" href={youtube.url} className="icon-youtube" />
      </Footer>
    )
  }
}

export default FooterComponent
