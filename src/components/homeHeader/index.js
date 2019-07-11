import React, { Component } from "react"
import { Banner, BannerContainer } from "./index.styled"
import bodyImage from "../../theme/images/1.jpg"
import {AuthorContainer} from "../../theme/index.styled"

class HomeHeaderComponent extends Component {
  render() {
    return (
      <Banner fullHeight={true} bg={bodyImage}>
          {/* ¿Qué es full Height? Viene de afuera? */}
      <BannerContainer fullHeight={false}>
          {/* ¿Es valido poner el br? jaja */}
          <AuthorContainer show={true} color={true}>
            <i> Por <b> Diana Perez Bautista</b> </i> <br/> Marzo 12 | 2019
          </AuthorContainer>
      </BannerContainer>
      </Banner>
    )
  }
}

export default HomeHeaderComponent
