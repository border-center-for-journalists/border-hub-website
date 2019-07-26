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
import myData from './prueba.json';

class SpecialNoticeComponent extends Component {
  render() {
    return (
      <NoticeSection>
        <HeaderNoticeComponent notice={myData} />
        <NormalNoticeContainer>
        <TextNoticeContentComponent notice={myData.data.body[0]} />
        <NormalSubscribeComponent/>
        <QuoteNoticeContentComponent notice={myData.data.body[2]} />
        <RectangleComponent/>
        <AuthorsNoticeComponent authors={myData.data.authors} />
        <NormalRelatedComponent/>
        </NormalNoticeContainer>
        {console.log(myData)}
      </NoticeSection>
    )
  }
}

export default SpecialNoticeComponent
