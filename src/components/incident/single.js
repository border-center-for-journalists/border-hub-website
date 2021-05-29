import React, { Component } from "react"
import { NoticeSection, NormalNoticeContainer,StatusSection } from "./single.styled"
import HeaderIncidentComponent from "./header.js"
import StatusIncidentComponent from "./status.js"
import TextNoticeContentComponent from "../notice/textContent"
import NormalSubscribeComponent from "../notice/suscribe.js"
import NormalDonateComponent from "../notice/donate.js"
import NormalRelatedComponent from "../notice/related.js"
// import myData from "./prueba.json"
import Prismic from "prismic-javascript"

class SingleIncidentComponent extends Component {
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
          Prismic.Predicates.at("document.type", "incidencia"),
          Prismic.Predicates.similar(prismicId, 3),
        ])
      )
      .then(response => {
        //console.log("RELATED", response)
        this.setState({ related: response.results })
      })
  }
  render() {
    console.log({notice: this.props.notice})
    return (
      <React.Fragment>
        <NoticeSection color="white">
          <HeaderIncidentComponent
            noticetype='normal'
            align="left"
            notice={this.props.notice}
            url={this.props.url}
          />
          <NormalNoticeContainer>
            <br />
            <TextNoticeContentComponent notice={this.props.notice} />
          </NormalNoticeContainer>
        </NoticeSection>
        <StatusSection color="#f2f2f2">
            <StatusIncidentComponent incident={this.props.notice} />
        </StatusSection>
        <NoticeSection color="white">
          <NormalNoticeContainer>
            <NormalSubscribeComponent />
            <NormalDonateComponent />
            <NormalRelatedComponent color="black" related={this.state.related} />
          </NormalNoticeContainer>
        </NoticeSection>
      </React.Fragment>
    )
  }
}

export default SingleIncidentComponent
