import React, { Component } from "react"
import { Donate } from "./index.styled"

class DonateComponent extends Component {
  render() {
    const { type } = this.props;

    return (
      <Donate
        href="https://www.buymeacoffee.com/borderhub"
        target="_blank"
        rel="noopener noreferrer"
        className={type}
      >
        📷 Apoya al periodismo
      </Donate>
    )
  }
}

export default DonateComponent