import React, { Component } from "react"
import { Sidebar, SocialContainer } from "./index.styled"

class SidebarComponent extends Component {
  render() {
    const { minify, data } = this.props
    const { facebook, twitter, youtube } = data

    return (
      <Sidebar minify={minify}>
        <SocialContainer>
          <a
            target="_blank"
            rel="noopener"
            href={facebook.url}
            className="icon-facebook"
          >
            <span>Borderhub Facebook Page</span>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href={twitter.url}
            className="icon-twitter"
          >
            <span>Borderhub Twitter Account</span>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href={youtube.url}
            className="icon-youtube"
          >
            <span>Borderhub Youtube Channel</span>
          </a>
        </SocialContainer>
      </Sidebar>
    )
  }
}

export default SidebarComponent;