import React, { Component } from "react"
import { NoticeSection } from "./index.styled"
import HeaderNoticeComponent from "./header.js"
import AuthorsNoticeComponent from "./authors"
import TextNoticeContentComponent from "./textContent"
import QuoteNoticeContentComponent from "./quote"
import MediaNoticeContentComponent from "./media"
import ColumnsNoticeContentComponent from "./columns"
import AlliancesNoticeContentComponent from "./alliances"
import ChartComponent from "./chart"
import NormalRelatedComponent from "./related.js"
import MultinotesComponent from "./multinotes.js"
import InteractiveIframe from './InteractiveIframe';
import Prismic from "prismic-javascript"

class SpecialNoticeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      related: [],
    }
  }
  componentDidMount() {
    const { prismicId } = this.props.notice
    const { API_KEY, API_URL } = this.props.site
    Prismic.getApi(API_URL, { accessToken: API_KEY })
      .then(api =>
        api.query([
          Prismic.Predicates.at("document.type", "noticias_especiales"),
          Prismic.Predicates.similar(prismicId, 3),
        ])
      )
      .then(response => {
        this.setState({ related: response.results })
      })
  }
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
        return <ChartComponent key={index} notice={data} type="area" />
      case "grafica_de_barras":
        return <ChartComponent key={index} notice={data} type="bar" />
      case "grafica_de_pay":
        return <ChartComponent key={index} notice={data} type="pie" />
      case "multi-nota":
        return <MultinotesComponent key={index} notice={data} />
      case "interactive":
        // return <MultinotesComponent key={index} notice={data} />
        return <InteractiveIframe key={index} notice={data} />
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
        <HeaderNoticeComponent
          noticetype='special'
          align="center"
          notice={this.props.notice}
          url={this.props.url}
        />
        {htmlContent}
        <AuthorsNoticeComponent
          color="white"
          align="center"
          authors={this.props.notice.data.author}
        />
        <AlliancesNoticeContentComponent
          alliances={this.props.notice.data.alliances}
        />
        <NormalRelatedComponent color="white" related={this.state.related} />
      </NoticeSection>
    )
  }
}

export default SpecialNoticeComponent
