import React, { Component } from "react"    
import { SpecialSection,  CustomTitle } from "./index.styled"
import {Container, Row, Paragraph, TitleContainer } from "../../theme/index.styled"

class SpecialNews extends Component {
    render() {
        console.log("Especial", this.props)
        return (
            <SpecialSection bg = {this.props.notice.nodes[0].data.banner.url}>
                <Container>
                    <Row>
                        <CustomTitle>
                            Especiales
                        </CustomTitle>
                    </Row>
                    <Row>
                        <TitleContainer fullHeight={false}>
                            <h1>
                                {this.props.notice.nodes[0].data.title.text}
                            </h1> 
                            <Paragraph>
                                Abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                            </Paragraph>
                        </TitleContainer>
                    </Row>
                </Container>
            </SpecialSection>
            )
        }
    } 

export default SpecialNews