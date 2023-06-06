import React, { Component } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import {
  ContactUsSection,
  ContactContainer,
  TitleYellow,
  CustomColText,
  CustomColForm,
  CustomRows
} from "./index.styled"
import { FormBody, Rows, Row } from "../../theme/index.styled"

class ContactUsComponent extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef(); // creando la referencia
    this.recaptchaRef = React.createRef(); // creando la referencia para reCAPTCHA
  }

  handleClick = async (event) => {
    event.preventDefault();
    const form = this.formRef.current;
    const recaptchaValue = this.recaptchaRef.current.getValue();

    if (!recaptchaValue) {
      alert("Por favor, completa el reCAPTCHA.");
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        form.reset();
        alert("¡Gracias por contactarnos!");
      } else {
        alert(
          "Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde."
        );
      }
    } catch (error) {
      alert(
        "Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };

  

  render() {
    const { address, email, phone, title, subtitle } = this.props.data;
    const emailTo = email.text;
    return (
      <ContactUsSection>
        <TitleYellow>
          <h1>{title.text}</h1>
          <p>{subtitle.text}</p>
        </TitleYellow>
        <ContactContainer>
          <CustomColForm>
            <FormBody>
              <form
                color={false}
                method="POST"
                action="https://jonquil-quoll-1694.twil.io/contact-server"
                ref={this.formRef} // agregando la referencia al formulario
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
                <ReCAPTCHA
                  sitekey="6Lej5XImAAAAAEu5-5pS_hZt1QUYxlmiA5DjI-7E"
                  onChange={this.handleRecaptchaChange}
                  ref={this.recaptchaRef}
                />
                <button onClick={this.handleClick} name="Submit">Enviar</button>
              </form>
            </FormBody>
          </CustomColForm>
          <CustomColText>
            <Row>
              <Rows keepRow rowS>
                <Row shrink widthXl="none" widthXs="40px" widthS="40px">
                  <i className="icon-mail" />
                </Row>
                <Row contact>
                  <h4>Mail:</h4> <p>{emailTo}</p>
                </Row>
              </Rows>
            </Row>
            <Row>
              <Rows keepRow rowS>
                <Row shrink widthXl="none" widthXs="40px" widthS="40px">
                  <i className="icon-location" />
                </Row>
                <Row contact>
                  <h4>Dirección:</h4> <p>{address.text}</p>
                </Row>
              </Rows>
            </Row>
            <Row>
              <Rows keepRow rowS>
                <Row shrink widthXl="none" widthXs="40px" widthS="40px">
                  <i className="icon-phone" />
                </Row>
                <Row contact>
                  <h4>Teléfono:</h4> <p>{phone.text}</p>
                </Row>
              </Rows>
            </Row>
          </CustomColText>
        </ContactContainer>
        <div className="donate-container-contact">
          <i className="icon-donar" />
          <h2>El periodismo requiere de tu apoyo</h2>
          <p>Conviértete en miembro del Border Hub</p>
          <a
            href="https://www.buymeacoffee.com/borderhub"
            target="_blank"
            className="bmc-button"
            rel="noopener noreferrer"
            style={{
              margin: "1.23em auto 0"
            }}
          >
            Donar
          </a>
        </div>
      </ContactUsSection >
    );
  }
}

export default ContactUsComponent;
