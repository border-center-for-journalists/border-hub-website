import React, { Component } from "react"    
import { MainNewSmall, MainNewSmallText } from "./index.styled"
import {AuthorContainer, ImageWrapper, Paragraph, Col } from "../../theme/index.styled"
import tempImg from "../../theme/images/2.jpg"
class SubNewComponent extends Component {
    render() {
        return (
        <MainNewSmall>
            <hr/>
            <Col>
            <ImageWrapper>
                <img alt="prueba" src={tempImg} />
            </ImageWrapper>
            </Col>
            <Col>
            <MainNewSmallText>
                <h3>
                    Labore et dolore magna aliqua. Ut enim ad minim
                </h3>
                <Paragraph>
                    Labore et dolore magna aliqua. Ut enim ad minim veniam rud exercitation ullamco laboris nisi ut aliquip ex ea commodo...  
                </Paragraph>
                <AuthorContainer>
                    <i> Por <b> Diana Perez Bautista</b> </i> <br/> Marzo 12 | 2019
                </AuthorContainer>
            </MainNewSmallText>
            </Col>
        </MainNewSmall>
        )
    }
}
export default SubNewComponent