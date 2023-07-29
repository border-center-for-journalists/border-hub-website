import React, { Component } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import {
  ContactUsSection,
  ContactContainer,
  TitleYellow,
  CustomColText,
  CustomColForm,
  FormRow,
  FormCol
} from "./index.styled"
import { FormBody, Rows, Row } from "../../theme/index.styled"
import { Context } from "../../lang/context";
import DonateComponent from "../../components/donate"
class ContactUsComponent extends Component {
  static contextType = Context
  constructor(props) {
    super(props);
    this.formRef = React.createRef(); // creando la referencia
    this.recaptchaRef = React.createRef(); // creando la referencia para reCAPTCHA
  }

  handleClick = async (e) => {
    e.preventDefault();
    const form = this.formRef.current;
    const reCaptcha = this.recaptchaRef.current;

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const regex = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

    if (!name || name.length < 3) {
      alert("Ingrese su nombre");
      return;
    }

    if (!subject || subject.length < 3) {
      alert("Ingrese el motivo del correo");
      return;
    }

    if (!message || message.length < 10 || message.length > 500) {
      alert("Ingrese un mensaje entre 10 y 500 caracteres");
      return;
    }

    if (!regex.test(email)) {
      alert("Ingrese un correo electrónico válido");
      return;
    }

    if (!reCaptcha.getValue()) {
      alert("Completa la verificación")
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new URLSearchParams({ name, email, message, subject, verification: reCaptcha.getValue() }).toString(),
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      });
      if (response.ok) {
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

    form.reset();
    reCaptcha.reset();
  }

  render() {
    const { address, email, phone, title, subtitle } = this.props.data
    const emailTo = email.text
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
                method="POST"
                action="https://jonquil-quoll-1694.twil.io/contact-server"
                ref={this.formRef} // agregando la referencia al formulario
              >
                <FormRow>
                  <FormCol>
                    <input
                      type="text"
                      name="name"
                      placeholder={this.context.contact.name}
                      required
                    />
                  </FormCol>
                  <FormCol>
                    <input
                      type="email"
                      name="email"
                      placeholder={this.context.contact.mail}
                      required
                    />
                  </FormCol>
                </FormRow>

                <FormRow>
                  <FormCol>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Asunto"
                      required
                    />
                  </FormCol>
                </FormRow>

                <FormRow>
                  <FormCol>
                    <textarea
                      rows="6"
                      maxLength={500}
                      name="message"
                      placeholder={this.context.contact.message + " 🖊️"}
                      required
                    />
                  </FormCol>
                </FormRow>

                <ReCAPTCHA
                  sitekey="6Lej5XImAAAAAEu5-5pS_hZt1QUYxlmiA5DjI-7E"
                  onChange={this.handleRecaptchaChange}
                  ref={this.recaptchaRef}
                />

                <button onClick={this.handleClick} name="Submit">
                  {this.context.contact.submit}
                </button>
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
                  <h4>{this.context.contact.mail}:</h4> <p>{emailTo}</p>
                </Row>
              </Rows>
            </Row>
            <Row>
              <Rows keepRow rowS>
                <Row shrink widthXl="none" widthXs="40px" widthS="40px">
                  <i className="icon-location" />
                </Row>
                <Row contact>
                  <h4>{this.context.contact.address}:</h4> <p>{address.text}</p>
                </Row>
              </Rows>
            </Row>
            <Row>
              <Rows keepRow rowS>
                <Row shrink widthXl="none" widthXs="40px" widthS="40px">
                  <i className="icon-phone" />
                </Row>
                <Row contact>
                  <h4>{this.context.contact.phone}:</h4> <p>{phone.text}</p>
                </Row>
              </Rows>
            </Row>
          </CustomColText>
        </ContactContainer>
        <div style={{ marginTop: '-130px'}}>
          <DonateComponent />
        </div>
      </ContactUsSection>
    )
  }
}

export default ContactUsComponent;
