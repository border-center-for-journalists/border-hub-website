import React, { Component } from "react"
import {
  Banner,
  BannerAuthor,
  BannerContainer,
  BannerTitle,
  BannerText,
  BannerColumns,
} from "./index.styled.js"
import bodyImage from "../../theme/images/1.jpg"
import { Rows, Row } from "../../theme/index.styled"
import { Context } from "../../lang/context.js"
import { getDate, getAuthor } from "../../utils/generic.js"

class HomeHeaderComponent extends Component {
  static contextType = Context;

  render() {
    const { bannerNotice } = this.props
    const { uid, data, type } = bannerNotice[0]
    const { title, excerpt, author, custom_publishdate, banner } = data
    const bannerBg = banner.url ? banner.url : bodyImage
    const section = type === "noticias_especiales" ? this.context.news.to_specials : this.context.news.to_recent_news

    return (
      <Banner id="hero" bg={bannerBg}>
        <BannerContainer fullHeight={false}>
          {bannerNotice.length === 0 ? (
            <Rows />
          ) : (
            <Rows>
              <Row shrink shrinkXl>
                <BannerTitle>
                  <a href={`${section}/${uid}/`}>{title.text}</a>
                </BannerTitle>
                <BannerColumns>
                  <BannerText>{excerpt.text}</BannerText>
                  <BannerAuthor>
                    <div>
                      <i>
                        {this.context.news.by} <b> {getAuthor(author)}</b>
                      </i>{" "}
                      <br />
                      {getDate(custom_publishdate, this.context.locale)}
                    </div>
                  </BannerAuthor>
                </BannerColumns>
              </Row>
            </Rows>
          )}
        </BannerContainer>
      </Banner>
    )
  }
}

export default HomeHeaderComponent
