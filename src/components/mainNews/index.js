import React, { Component } from "react"    
import {NewsContainer, MainNewBig, SubTitleParagraph, TextContainer } from "./index.styled"
import { AuthorContainer, ImageWrapper, YellowTitle } from "../../theme/index.styled"
import tempImg from "../../theme/images/2.jpg"
import SubNewComponent from "./subNews.js"
class MainNewsComponent extends Component {
    render() {
      return (
          <NewsContainer>
              <YellowTitle>
                    Notas Principales
              </YellowTitle>
              <MainNewBig size="Common">
                <ImageWrapper>
                    <img alt="prueba" src={tempImg} />
                </ImageWrapper>
                <TextContainer>
                  <h2>Sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
                  <SubTitleParagraph>
                    Labore et dolore magna aliqua. Ut enim ad minim veniam rud exercitation ullamco laboris nisi ut aliquip ex ea commodo... consequat.  
                  </SubTitleParagraph>
                  <AuthorContainer>
                    <i> Por <b> Diana Perez Bautista</b> </i> <br/> Marzo 12 | 2019
                  </AuthorContainer>
                </TextContainer>
                <SubNewComponent/>
                <SubNewComponent/>
              </MainNewBig>
          </NewsContainer>
      )
    }
  }
  
  export default MainNewsComponent
  