import React, { Component } from "react"    
import {YellowBody, CustomRow, XContainer } from "./index.styled"
import {TitleMediumContainer, Rows, FormBody } from "../../theme/index.styled"


class SubscribeComponent extends Component {
    constructor(props) {
		super(props);
		this.state = {
			deleteMe: true,
        };
        console.log(this.state.deleteMe)
	}
    setSuscribe(){
        this.setState({
            deleteMe:false
        })
        console.log(this.state.deleteMe)
    }
    render() {
      return (
          <div>
            {this.state.deleteMe ? 
        <YellowBody>    
            <XContainer>
                <button onClick={()=>this.setSuscribe()} className="icon-x"/>
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
        : null }
        </div>
      )
    }
}
export default SubscribeComponent