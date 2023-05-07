import React, { Component } from "react"
import { Footer, Social, BlackContainer, YellowContainer } from "./index.styled"
import bc from "../../theme/images/borderhubcenter.jpg"
import bh from "../../theme/images/logo.jpg"
import bcjb from "../../theme/images/logo_footer.jpg"

class FooterComponent extends Component {
  render() {
    const { facebook, twitter, youtube } = this.props.data
    return (
      <Footer>
        <BlackContainer>
          <a href="https://www.bordercenter.net/es/">
            <img alt="Border Hub" src={bh} />
          </a>
          <a href="/">
            <img alt="Border Center" src={bc} />
          </a>
        </BlackContainer>
        <YellowContainer>
          <img alt='' src={bcjb} />
          <Social
            target="_blank"
            bigger
            href={facebook.url}
            className="icon-facebook"
          />
          <Social target="_blank" href={twitter.url} className="icon-twitter" rel='noopener' />
          <Social target="_blank" href={youtube.url} className="icon-youtube" rel='noopener' />
        </YellowContainer>
      </Footer>
    )
  }
}

export default FooterComponent
