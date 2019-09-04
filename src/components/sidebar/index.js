import React, { Component } from "react"
import { Sidebar, Social, Hamburguer, Menu, Overlay } from "./index.styled"
import { Rows } from "../../theme/index.styled"
import logo from "../../theme/images/borderhubcenter.jpg"

class SidebarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }
  componentDidMount() {}
  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }
  render() {
    const { facebook, twitter, youtube, menu } = this.props.data
    return (
      <Sidebar minify={this.props.minify}>
        <Hamburguer
          onClick={() => {
            this.toggleMenu()
          }}
          className={this.state.menuOpen ? "open" : ""}
        >
          <i />
        </Hamburguer>
        <Social
          target="_blank"
          bigger
          href={facebook.url}
          className="icon-facebook"
        />
        <Social target="_blank" href={twitter.url} className="icon-twitter" />
        <Social target="_blank" href={youtube.url} className="icon-youtube" />
        <Overlay
          onClick={() => {
            this.toggleMenu()
          }}
          className={this.state.menuOpen ? "open" : ""}
        />
        <Menu className={this.state.menuOpen ? "open" : ""}>
          <Hamburguer
            onClick={() => {
              this.toggleMenu()
            }}
            className="open"
          >
            <i />
          </Hamburguer>
          <a href="/">
            <img alt="Border center" src={logo} />
          </a>
          <ul>
            {menu.map((item, index) => (
              <li key={index}>
                <a href={item.item_link.url}>{item.item_name.text}</a>
              </li>
            ))}
          </ul>
          <br />
          <Rows rowXs rowS rowM>
            <Social
              target="_blank"
              bigger
              href={facebook.url}
              className="icon-facebook"
            />
            <Social
              target="_blank"
              href={twitter.url}
              className="icon-twitter"
            />
            <Social
              target="_blank"
              href={youtube.url}
              className="icon-youtube"
            />
          </Rows>
        </Menu>
      </Sidebar>
    )
  }
}

export default SidebarComponent
