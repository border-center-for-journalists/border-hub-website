import React, { Component } from "react";
import { Hamburguer, Menu, MenuHeader, MenuBody, SocialContainer, LanguageMenu } from "./index.styled";
import logo from "../../../theme/images/borderhubcenter.jpg"
import DonateComponent from "../donate";
import { Context } from "../../../lang/context";
class MenuComponent extends Component {
  static contextType = Context
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.divRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.divRef && !this.divRef.current.contains(event.target)) {
      this.setState({ isOpen: false })
    }
  }

  handleDivClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { facebook, twitter, youtube, menu } = this.props.data;
    const openClassName = this.state.isOpen ? "open" : "";

    return (
      <div ref={this.divRef}>
        <Hamburguer
          type="button"
          title="menu opener"
          className={openClassName}
          onClick={this.handleDivClick}
        >
          <i />
        </Hamburguer>

        <Menu className={openClassName}>
          <MenuHeader>
            <a href={"/" + this.context.locale + "/"}>
              <img alt="Borderhub" src={logo} />
            </a>
            <Hamburguer
              type="button"
              title="menu closer"
              className={openClassName}
              onClick={this.handleDivClick}
            >
              <i />
            </Hamburguer>
          </MenuHeader>

          <MenuBody>
            <ul>
              {menu.map((item, index) => (
                <li key={index}>
                  <a href={`${item.item_link.url}/`}>
                    {item.item_name.text}
                  </a>
                </li>
              ))}
            </ul>

            <DonateComponent
              text={this.context.donate.fund}
              type="rounded"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                verticalAlign: "center",
              }}
            >
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
              <LanguageMenu>
                <li>
                  <a
                    className={this.context.locale === "en" ? "active" : ""}
                    href={this.context.menu.to.EN}
                  >
                    {this.context.menu.label.EN}
                  </a>
                </li>
                <li>
                  <a
                    className={this.context.locale === "es" ? "active" : ""}
                    href={this.context.menu.to.ES}
                  >
                    {this.context.menu.label.ES}
                  </a>
                </li>
              </LanguageMenu>
            </div>
          </MenuBody>
        </Menu>
      </div>
    )
  }
}

export default MenuComponent;