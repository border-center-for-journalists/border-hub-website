import React, { Component } from "react"
import { Header, Logo } from "./index.styled"
import logo from "../../theme/images/borderhubcenter.jpg"

class HeaderComponent extends Component {
  render() {
    return (
      <Header>
        <Logo href="/">
          <img alt="Border center" src={logo} />
        </Logo>
      </Header>
    )
  }
}

export default HeaderComponent
