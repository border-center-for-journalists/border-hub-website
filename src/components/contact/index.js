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
import { Context } from "../../lang/context";
import DonateComponent from "../../components/donate"
class ContactUsComponent extends Component {
  static contextType = Context
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
          <h1>{title.text}</h1>
          <p>{subtitle.text}</p>
        </TitleYellow>
        <ContactContainer>
          <CustomColForm>
            <FormBody>
              <form
                method="POST"
                action={`https://formspree.io/${emailTo}`}
                ref={this.formRef} // agregando la referencia al formulario
              >
                <CustomRows align="space-between">
                  <Row width="48%">
                    <input type="text" name="name" placeholder={this.context.contact.name} />
                  </Row>
                  <Row width="48%">
                    <input type="email" name="email" placeholder={this.context.contact.mail} />
                  </Row>
                </CustomRows>
                <textarea rows="6" name="message" placeholder={this.context.contact.message} />
                <button onClick={this.handleClick} name="Submit">{this.context.contact.submit}</button>
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
      </ContactUsSection >
    );
  }
}

export default ContactUsComponent;
