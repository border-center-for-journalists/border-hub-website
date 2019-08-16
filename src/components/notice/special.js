import React, { Component } from "react"
import { NoticeSection } from "./index.styled"
import HeaderNoticeComponent from "./header.js"
import AuthorsNoticeComponent from "./authors"
import TextNoticeContentComponent from "./textContent"
import QuoteNoticeContentComponent from "./quote"
import MediaNoticeContentComponent from "./media"
import ColumnsNoticeContentComponent from "./columns"
import AlliancesNoticeContentComponent from "./alliances"

class SpecialNoticeComponent extends Component {
  getComponent = (data, index) => {
    switch (data.slice_type) {
      case "texto":
        return <TextNoticeContentComponent key={index} notice={data} />
      case "multimedia":
        return <MediaNoticeContentComponent key={index} notice={data} />
      case "citado":
        return <QuoteNoticeContentComponent key={index} notice={data} />
      case "bloque":
        return <ColumnsNoticeContentComponent key={index} notice={data} />
      case "graficas":
        return <p> Gráficas (: </p>
      default:
        return <p> Esto no debería de pasar (: </p>
    }
  }
  render() {
    const htmlContent = this.props.notice.data.body.map((data, index) =>
      this.getComponent(data, index)
    )
    return (
      <NoticeSection>
        <HeaderNoticeComponent notice={this.props.notice} />
        {htmlContent}
        <AuthorsNoticeComponent authors={this.props.notice.data.authors} />
        <AlliancesNoticeContentComponent
          alliances={this.props.notice.data.alliances}
        />
      </NoticeSection>
    )
  }
}

export default SpecialNoticeComponent
