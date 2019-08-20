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
<<<<<<< HEAD
      <NoticeSection color="black">
        {console.log(this.props.notice.data)}
=======
      <NoticeSection>
>>>>>>> 7bed148e4811b0d86efb07300b18a5b6339e6a98
        <HeaderNoticeComponent align="left" notice={this.props.notice} />
        <NormalNoticeContainer>
          <TextNoticeContentComponent notice={this.props.notice} />
          <NormalSubscribeComponent />
          <QuoteNoticeContentComponent notice={myData.data.body[2]} />
          <AuthorsNoticeComponent authors={myData.data.authors} />
          <NormalDonateComponent />
          <NormalRelatedComponent />
        </NormalNoticeContainer>
      </NoticeSection>
    )
  }
}

export default NormalNoticeComponent
