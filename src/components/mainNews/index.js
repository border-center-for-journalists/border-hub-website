import React, { Component } from "react"    
import {NewsContainer, MainNewBig, SubTitleParagraph, TextContainer } from "./index.styled"
import { AuthorContainer, ImageWrapper, YellowTitle } from "../../theme/index.styled"
import tempImg from "../../theme/images/2.jpg"
import SubNewComponent from "./subNews.js"

class   MainNewsComponent extends Component {
  
  getComponent = (data, i) => {
      const noticeLen = Object.keys(this.props.notice).length
      if (noticeLen === i + 1) {
        return <div>
        <ImageWrapper>
          <img alt="prueba" src={data.data.banner.url} />
        </ImageWrapper>
        <TextContainer>
          <h2>{data.data.title.text}</h2>
          <SubTitleParagraph>
            {data.data.excerpt.text}
          </SubTitleParagraph>
          <AuthorContainer>
            <i> Por <b>  {data.data.author[0].name.text} </b> </i> <br/> Marzo 12 | 2019
          </AuthorContainer>
        </TextContainer>
        </div>
      } else {
        return <SubNewComponent notice={data}/>
      }
    }
    render() {
      const htmlContent = this.props.notice.nodes.map((data, index) =>
      this.getComponent(data, index)
    )
      return (
          <NewsContainer>
              <YellowTitle>
                    Notas Principales
              </YellowTitle>
              <MainNewBig size="Common">
              {htmlContent}
              </MainNewBig>
          </NewsContainer>
      )
    }
  }
  
  export default MainNewsComponent
  