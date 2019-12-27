import React, { Component } from "react"
import { NoticeSection, NormalNoticeContainer } from "./index.styled"
import HeaderNoticeComponent from "./header.js"
import AuthorsNoticeComponent from "./authors"
import TextNoticeContentComponent from "./textContent"
import NormalSubscribeComponent from "./suscribe.js"
import NormalDonateComponent from "./donate.js"
import NormalRelatedComponent from "./related.js"
// import myData from "./prueba.json"
import Prismic from "prismic-javascript"

class NormalNoticeComponent extends Component {
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
          Prismic.Predicates.at("document.type", "noticias"),
          Prismic.Predicates.similar(prismicId, 3),
        ])
      )
      .then(response => {
        //console.log("RELATED", response)
        this.setState({ related: response.results })
      })
  }
  render() {
    return (
      <NoticeSection color="black">
        <HeaderNoticeComponent
          noticetype='normal'
          align="left"
          notice={this.props.notice}
          url={this.props.url}
        />
        <NormalNoticeContainer>
          <br />
          <TextNoticeContentComponent notice={this.props.notice} />
          <NormalSubscribeComponent />
          <AuthorsNoticeComponent
            color="black"
            align="left"
            authors={this.props.notice.data.author}
          />
          <NormalDonateComponent />
          <NormalRelatedComponent color="black" related={this.state.related} />
        </NormalNoticeContainer>
      </NoticeSection>
    )
  }
}

export default NormalNoticeComponent
