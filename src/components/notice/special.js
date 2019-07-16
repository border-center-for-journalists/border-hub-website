import React, { Component } from "react"
import { NoticeSection } from "./index.styled"
import HeaderNoticeComponent from "./header.js"
import AuthorsNoticeComponent from "./authors"

class SpecialNoticeComponent extends Component {
  render() {
    return (
      <NoticeSection>
        <HeaderNoticeComponent />
        <AuthorsNoticeComponent />
      </NoticeSection>
    )
  }
}

export default SpecialNoticeComponent
