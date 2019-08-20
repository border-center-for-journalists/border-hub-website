import React, { Component } from "react"
import {
  ContactUsSection,
  ContactContainer,
  TitleYellow,
  CustomColText,
  CustomColForm,
  CustomRows,
} from "./index.styled"
import { FormBody, Rows, Row } from "../../theme/index.styled"

class ContactUsComponent extends Component {
  render() {
    const { address, email, phone, title, subtitle } = this.props.data
    const emailTo = email.text
    return (
      <ContactUsSection>
        <TitleYellow>
          <h3>{title.text}</h3>
          <p>{subtitle.text}</p>
        </TitleYellow>
        <ContactContainer>
          <CustomColForm>
            <FormBody
              color={false}
              method="POST"
              action={`https://formspree.io/${emailTo}`}
            >
              <CustomRows align="space-between">
                <Row width="48%">
                  <input type="text" name="name" placeholder="Nombre" />
                </Row>
                <Row width="48%">
                  <input type="email" name="email" placeholder="Mail" />
                </Row>
              </CustomRows>
              <textarea rows="6" name="message" placeholder="Message" />
              <Row>
                <button name="Submit">Enviar</button>
              </Row>
            </FormBody>
          </CustomColForm>
          <CustomColText>
            <Row>
              <Rows>
                <Row shrink>
                  <i className="icon-mail" />
                </Row>
                <Row>
                  <h4>Mail:</h4> <p>{emailTo}</p>
                </Row>
              </Rows>
            </Row>
            <Row>
              <Rows>
                <Row shrink>
                  <i className="icon-location" />
                </Row>
                <Row>
                  <h4>Dirección:</h4> <p>{address.text}</p>
                </Row>
              </Rows>
            </Row>
            <Row>
              <Rows>
                <Row shrink>
                  <i className="icon-phone" />
                </Row>
                <Row>
                  <h4>Teléfono:</h4> <p>{phone.text}</p>
                </Row>
              </Rows>
            </Row>
          </CustomColText>
        </ContactContainer>
      </ContactUsSection>
    )
  }
}

export default ContactUsComponent
