import React, { Component } from "react"
import { Banner, BannerContainer, BannerImg } from "./index.styled"
import bodyImage from "../../theme/images/1.jpg"
import { AuthorContainer, Rows, Row, TitleContainer, Paragraph } from "../../theme/index.styled"

class HomeHeaderComponent extends Component {
  render() {
    return (
      <Banner>
        <BannerImg fullHeight={true} bg={bodyImage}/>
        <BannerContainer fullHeight={false}>
          <Rows>
            <Row>
              <AuthorContainer show={true} color={true}>
                <i>
                  Por <b> Diana Perez Bautista</b>
                </i>
                <br /> Marzo 12 | 2019
              </AuthorContainer>
            </Row>  
            <Row>
              <TitleContainer fullHeight={true}>
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt
                </h1>
                <AuthorContainer show={false} color={true}>
                  <i>
                    Por <b> Diana Perez Bautista</b>
                  </i>
                  <br /> Marzo 12 | 2019
                </AuthorContainer>
                <Paragraph>
                  Abore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit
                </Paragraph>
              </TitleContainer>
            </Row>
          </Rows>
        </BannerContainer>
      </Banner>
    )
  }
}

export default HomeHeaderComponent
