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
  constructor(props) {
    super(props);
    this.formRef = React.createRef(); // creando la referencia
  }

  handleClick = async (event) => {
    event.preventDefault();
    const form = this.formRef.current;

    if (!(form instanceof HTMLFormElement)) {
      console.error('No se ha encontrado un elemento HTMLFormElement');
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
      })
      if (response.ok) {
        form.reset(); // limpiar el formulario si el envío es exitoso
        alert("¡Gracias por contactarnos!");
      } else {
        alert("Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.");
      }
    } catch (error) {
      alert("Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.");
    }
  }

  render() {
    const { address, email, phone, title, subtitle } = this.props.data;
    const emailTo = email.text;
    return (
      <ContactUsSection>
        <TitleYellow>
          <h3>{title.text}</h3>
          <p>{subtitle.text}</p>
        </TitleYellow>
        <ContactContainer>
          <CustomColForm>
            <FormBody>
              <form
                color={false}
                method="POST"
                action={`https://formspree.io/${emailTo}`}
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
      </ContactUsSection >
    );
  }
}

export default ContactUsComponent;
