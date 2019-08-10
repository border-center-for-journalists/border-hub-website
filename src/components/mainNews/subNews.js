import React, { Component } from "react"    
import { MainNewSmall, MainNewSmallText } from "./index.styled"
import {AuthorContainer, ImageWrapper, Paragraph, Col } from "../../theme/index.styled"
import tempImg from "../../theme/images/2.jpg"
class SubNewComponent extends Component {
    render() {
        console.log(this.props)
        return (
        <MainNewSmall>
            <hr/>
            <Col>
            <ImageWrapper>
                <img alt="prueba" src={this.props.notice.data.banner.url} />
            </ImageWrapper>
            </Col>
            <Col>
            <MainNewSmallText>
                <h3>
                    {this.props.notice.data.title.text}
                </h3>
                <Paragraph>
                    {this.props.notice.data.excerpt.text}
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