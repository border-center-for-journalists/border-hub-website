import React, { Component } from "react"    
import {YellowBody, FormBody, Col_3 } from "./index.styled"
import {TitleMediumContainer, Row } from "../../theme/index.styled"


class SubscribeComponent extends Component {
    render() {
      return (
        <YellowBody>
            <TitleMediumContainer color={true}>
                <h3>
                Suscríbete
                </h3>
                <FormBody>
                    <Col_3>
                    <Row>
                        <p>Nombre</p>
                    </Row>
                    <Row>
                        <input type="text" name="name" />
                    </Row>
                    </Col_3>
                    <Col_3>
                    <Row>
                        <p>Mail</p>
                    </Row>
                    <Row>
                        <input type="email" name="email"/>
                    </Row>
                    </Col_3>
                    <Col_3>
                        <button name="Submit">Enviar</button>
                    </Col_3>
                </FormBody>
            </TitleMediumContainer>
        </YellowBody>
      )
    }
}
export default SubscribeComponent