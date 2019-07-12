import React, { Component } from "react"    
import { SpecialSection, SpecialContainer,  CustomTitle } from "./index.styled"
import {Row, Paragraph, TitleContainer } from "../../theme/index.styled"

class SpecialNews extends Component {
    render() {
        return (
            <SpecialSection>
                <SpecialContainer>
                    <Row>
                        <CustomTitle>
                            Especiales
                        </CustomTitle>
                    </Row>
                    <Row>
                        <TitleContainer fullHeight={false}>
                            <h1>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            </h1> 
                            <Paragraph>
                                Abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                            </Paragraph>
                        </TitleContainer>
                    </Row>
                </SpecialContainer>
            </SpecialSection>
            )
        }
    } 

export default SpecialNews