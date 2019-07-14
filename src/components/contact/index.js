import React, { Component } from "react"    
import {ContactUsSection, ContactContainer, TitleYellow, CustomColText, CustomColForm, CustomRows } from "./index.styled"
import { FormBody, Row, Col, Container}  from "../../theme/index.styled"

class ContactUsComponent extends Component {
    render() {
      return (
        <ContactUsSection>
            <TitleYellow>
                <h3>Contact Us</h3>
                <p>Labore et dolore magna aliqua. Ut enim ad minim veniam rud exercitation ullamco laboris nisi ut aliquip ex.</p>
            </TitleYellow>
            <ContactContainer>
                <CustomColForm>
                <FormBody color={false}>
                    <CustomRows>
                        <Row>
                            <input type="text" name="name" placeholder="Nombre"/>
                        </Row>
                        <Row>
                            <input type="email" name="email" placeholder="Mail"/>
                        </Row>  
                    </CustomRows>
                    <Row>
                        <textarea rows="6" cols="50" placeholder="Message"/>
                    </Row>
                    <Row>
                        <button name="Submit">Enviar</button>
                    </Row> 
                </FormBody>
                </CustomColForm>
                <CustomColText>
                <Row>
                    <h4>Mail:</h4> <p>info@border.com</p>
                </Row>
                <Row>
                    <h4>Dirección:</h4> <p>Beniam rud exercitation ullamco laboris nisi ut aliquip</p>
                </Row>
                <Row>
                    <h4>Teléfono:</h4> <p>+55 6879878</p>
                </Row>
                </CustomColText>
            </ContactContainer>
        </ContactUsSection>
      )
    }
}

export default ContactUsComponent