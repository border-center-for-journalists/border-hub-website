import React, { Component } from "react"
import { Header, ProductIcon, MenuWrapper, SmHidden } from "./index.styled"
import logo from "../../../theme/images/borderhubcenter.jpg"
import smallLogo from "../../../theme/images/small_logo.jpg"
import MenuComponent from "../menu"
import DonateComponent from "../donate"
import { Context } from "../../../lang/context"
class HeaderComponent extends Component {
  static contextType = Context
  render() {
    const { minify, data } = this.props
    return (
      <Header>
        <MenuWrapper>
          <MenuComponent data={data} />
          <ProductIcon href={"/" + this.context.locale + "/"} minify={minify}>
            <span>Borderhub Logo</span>
            <img
              alt="Borderhub"
              src={this.props.minify ? smallLogo : logo}
            />
          </ProductIcon>
        </MenuWrapper>
        <SmHidden>
          <DonateComponent text={this.context.donate.fund} type={"square"} />
        </SmHidden>
      </Header>
    )
  }
}

export default HeaderComponent;