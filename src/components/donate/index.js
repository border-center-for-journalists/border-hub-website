import React, { Component } from "react";
import { Context } from "../../lang/context";

class DonateComponent extends Component {
  static contextType = Context
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="donate-container-news">
        <i className="icon-donar" />
        <h2>{this.context.donate.title}</h2>
        <p>{this.context.donate.become_part_of_border}</p>
        <a
          href="https://www.buymeacoffee.com/borderhub"
          target="_blank"
          className="bmc-button"
          rel="noopener noreferrer"
          style={{
            margin: "1.23em auto 0",
          }}
        >
          {this.context.donate.donate}
        </a>
      </div>
    )
  }
}

export default DonateComponent;