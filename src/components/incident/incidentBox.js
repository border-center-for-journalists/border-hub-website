import React, { Component } from "react"
import { MainIncidentSmall, MainNewSmallText, MobileParagraph } from "./index.styled"
import { AuthorContainer, ImageWrapper, Col, ParticipantOrganizations, InvertedImage } from "../../theme/index.styled"
import moment from "moment"
import "moment/locale/es"
moment.locale("es")

class IncidentBox extends Component {

  render() {
    const urlSectionType = 'incidencia'
    const darkMode = true;
    console.log({IncidentBox: this.props.notice.data})
    return (
      <MainIncidentSmall>
        <Col>
          <ImageWrapper>
            <a href={`/${urlSectionType}/${this.props.notice.uid}/`}>
              <img
                alt="prueba"
                src={this.props.notice.data.banner.thumbnail.url}
              />
            </a>
          </ImageWrapper>
        </Col>
        <Col>
          <MainNewSmallText darkMode={darkMode}>
            <h3>
              <a href={`/${urlSectionType}/${this.props.notice.uid}/`}>
                {this.props.notice.data.title.text}
              </a>
            </h3>
            {/*<Paragraph>{this.props.notice.data.excerpt.text}</Paragraph>*/}
            <MobileParagraph>
              {moment(this.props.notice.data.custom_publishdate).format(
                "DD MMMM YYYY"
              ).toUpperCase()}
            </MobileParagraph>
            <hr />
            <MobileParagraph>
              {(this.props.notice.data.excerpt.text || "" ).slice(0, 200)}
              {(this.props.notice.data.excerpt.text || "" ).length > 200 ? " ..." : ""}
            </MobileParagraph>

            <AuthorContainer show yellowMode={darkMode}>
              <i>
                {" "}
                {(this.props.notice.data.organizations|| []).length > 0 && this.props.notice.data.organizations[0].image.url  ? 'Organizaciones participantes' : "" }
              </i>{" "}
            </AuthorContainer>
            <ParticipantOrganizations>
              {(this.props.notice.data.organizations|| []).map(organization=>(
                <InvertedImage 
                  key={organization.image.url} 
                  src={organization.image.url}
                />
                )
              )}  
            </ParticipantOrganizations>
          </MainNewSmallText>
        </Col>
      </MainIncidentSmall>
    )
  }
}
export default IncidentBox