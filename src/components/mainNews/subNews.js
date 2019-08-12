import React, { Component } from "react"    
import { MainNewSmall, MainNewSmallText } from "./index.styled"
import {AuthorContainer, ImageWrapper, Paragraph, Col } from "../../theme/index.styled"
import tempImg from "../../theme/images/2.jpg"
class SubNewComponent extends Component {
    render() {
        const Months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        let date = new Date(this.props.notice.data.custom_publishdate); 
        let trueDate =  Months[date.getMonth()] + " " +  date.getDate() + " | " + date.getFullYear();
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
                    <i> Por <b> {this.props.notice.data.author[0].name.text} </b> </i> <br/> {trueDate}
                </AuthorContainer>
            </MainNewSmallText>
            </Col>
        </MainNewSmall>
        )
    }
}
export default SubNewComponent