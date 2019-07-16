import React, { Component } from "react"    
import { NewsContainer, NewsText, DateText, ImgCol, TextCol, YellowText } from "./index.styled"
import {ImageWrapper, Paragraph } from "../../theme/index.styled"
import tempImg from "../../theme/images/3.jpg"

class SubNewComponent extends Component {
    render() {
        return (
        <NewsContainer>
            <TextCol>
            <NewsText>
                <h3>
                    Labore et dolore magna aliqua. 
                </h3>
                <Paragraph>
                    Sectetur adipisicing elit, sed do eiusmod tempor incididunt ...
                </Paragraph>
            </NewsText>
            <DateText>
                4:00 pm <br/>  <YellowText>Marzo 08 </YellowText> | 2019
            </DateText>
            </TextCol>
            <ImgCol>
                <ImageWrapper>
                    <img alt="prueba" src={tempImg} />
                </ImageWrapper>
            </ImgCol>
        </NewsContainer>
        )
    }
}
export default SubNewComponent