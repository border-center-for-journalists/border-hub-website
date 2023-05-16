import React, { Component } from "react"
import { Header, Logo } from "./index.styled"
import logo from "../../theme/images/borderhubcenter.jpg"
import smallLogo from "../../theme/images/small_logo.jpg"

class HeaderComponent extends Component {
  render() {
    return (
      <Header minify={this.props.minify}>
        <Logo href="/" minify={this.props.minify}>
          <img alt="Border center" src={this.props.minify ? smallLogo : logo} />
        </Logo>
        <button className="bmc-btn-container"><a href="https://www.buymeacoffee.com/borderhub" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}> 📷 Apoya al periodismo</a></button>
      </Header>
    )
  }
}

export default HeaderComponent
