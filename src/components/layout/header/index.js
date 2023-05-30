import React, { Component } from "react"
import { Header, ProductIcon, MenuWrapper, SmHidden } from "./index.styled"
import logo from "../../../theme/images/borderhubcenter.jpg"
import smallLogo from "../../../theme/images/small_logo.jpg"
import MenuComponent from "../menu"
import DonateComponent from "../donate"

class HeaderComponent extends Component {
  render() {
    const { minify, data } = this.props
    return (
      <Header>
        <MenuWrapper>
          <MenuComponent data={data} />
          <ProductIcon href="/" minify={minify}>
            <span>Borderhub Logo</span>
            <img
              alt="Borderhub"
              src={this.props.minify ? smallLogo : logo}
            />
          </ProductIcon>
        </MenuWrapper>
        <SmHidden>
          <DonateComponent type={"square"} />
        </SmHidden>
      </Header>
    )
  }
}

export default HeaderComponent;