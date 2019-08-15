import React, { Component } from "react"    
import {YellowBody, CustomRow, XContainer } from "./index.styled"
import {TitleMediumContainer, Rows, FormBody } from "../../theme/index.styled"


class SubscribeComponent extends Component {
    render() {
      return (
        <YellowBody>
            <XContainer>
                <i className="icon-x"/>
            </XContainer>
            <TitleMediumContainer color={true}>
                <h3>
                Suscríbete
                </h3>
                <FormBody color={true}>
                    <Rows>
                    <CustomRow>
                        <p>Nombre</p>
                        <input type="text" name="name" />
                    </CustomRow>
                    <CustomRow >
                        <p>Mail</p>
                        <input type="email" name="email"/>
                    </CustomRow>
                    <CustomRow>
                        <button name="Submit">Enviar</button>
                    </CustomRow>   
                    </Rows>
                </FormBody>
            </TitleMediumContainer>
        </YellowBody>
      )
    }
}
export default SubscribeComponent