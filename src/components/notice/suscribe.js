import React, { Component } from "react"    
import { YellowContainer, CustomRow } from "./index.styled"
import {TitleMediumContainer, Rows, FormBody } from "../../theme/index.styled"


class NormalSubscribeComponent extends Component {
    render() {
      return (
        <YellowContainer size="medium">
            <TitleMediumContainer color={true}>
                <h3>
                Unete a nuestro newsletter.
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
                        <button name="Submit">Me uno</button>
                    </CustomRow>   
                    </Rows>
                </FormBody>
            </TitleMediumContainer>
        </YellowContainer>
      )
    }
}
export default NormalSubscribeComponent