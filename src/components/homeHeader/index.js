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

import { getDate, getAuthor } from "../../utils/generic.js"
import { SPECIAL_NEWS_URL, NEWS_URL } from "../../utils/constants"

class HomeHeaderComponent extends Component {
  render() {
    const { bannerNotice } = this.props
    const { uid, data, type } = bannerNotice[0]
    const { title, excerpt, author, custom_publishdate, banner } = data
    const bannerBg = banner.url ? banner.url : bodyImage
    const section = type === "noticias_especiales" ? SPECIAL_NEWS_URL : NEWS_URL

    return (
      <Banner id="hero" bg={bannerBg}>
        <BannerContainer fullHeight={false}>
          {bannerNotice.length === 0 ? (
            <Rows />
          ) : (
            <Rows>
              <Row shrink shrinkXl>
                <BannerTitle>
                  <a href={`/${section}/${uid}/`}>{title.text}</a>
                </BannerTitle>
                <BannerColumns>
                  <BannerText>{excerpt.text}</BannerText>
                  <BannerAuthor>
                    <div>
                      <i>
                        Por <b> {getAuthor(author)}</b>
                      </i>{" "}
                      <br />
                      {getDate(custom_publishdate)}
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
