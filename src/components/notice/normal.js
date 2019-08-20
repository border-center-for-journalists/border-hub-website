import React, { Component } from "react"
import { NoticeSection, NormalNoticeContainer } from "./index.styled"
import HeaderNoticeComponent from "./header.js"
import AuthorsNoticeComponent from "./authors"
import TextNoticeContentComponent from "./textContent"
import QuoteNoticeContentComponent from "./quote"
import NormalSubscribeComponent from "./suscribe.js"
import RectangleComponent from "./rectangle.js"
import NormalDonateComponent from "./donate.js"
import NormalRelatedComponent from "./related.js"
import myData from "./prueba.json"

class NormalNoticeComponent extends Component {
  render() {
    return (
      <NoticeSection color="black">
        {console.log(this.props.notice.data)}
        <HeaderNoticeComponent align="left" notice={this.props.notice} />
        <NormalNoticeContainer>
          <TextNoticeContentComponent notice={this.props.notice} />
          <NormalSubscribeComponent />
          <AuthorsNoticeComponent authors={myData.data.authors} />
          <NormalDonateComponent />
          <NormalRelatedComponent notices={this.props.related} />
        </NormalNoticeContainer>
      </NoticeSection>
    )
  }
}

export default NormalNoticeComponent
