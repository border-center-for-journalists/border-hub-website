import React, { Component } from "react"    
import { NewsContainer, NewsText, DateText, InterCol } from "./index.styled"
import {ImageWrapper, Paragraph, Col } from "../../theme/index.styled"
import tempImg from "../../theme/images/3.jpg"

class SubNewComponent extends Component {
    render() {
        return (
        <NewsContainer>
            <InterCol>
            <NewsText>
                <h3>
                    Labore et dolore magna aliqua. 
                </h3>
                <Paragraph>
                    Sectetur adipisicing elit, sed do eiusmod tempor incididunt ...
                </Paragraph>
            </NewsText>
            <DateText>
                4:00 pm <br/>  Marzo 08 | 2019
            </DateText>
            </InterCol>
            <InterCol>
            <ImageWrapper>
                <img alt="prueba" src={tempImg} />
            </ImageWrapper>
            </InterCol>
        </NewsContainer>
        )
    }
}
export default SubNewComponent