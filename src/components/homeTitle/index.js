import React, { Component } from "react"    
import {Paragraph, Section,TitleContainer, AuthorContainer } from "../../theme/index.styled"

class HomeTitle extends Component {
    render() {
      return (
          <Section>
            <TitleContainer fullHeight={true}>
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  <AuthorContainer show={false} color={true}>
                    <i> Por <b> Diana Perez Bautista</b> </i> <br/> Marzo 12 | 2019
                  </AuthorContainer>
                    <hr/>
                    <Paragraph>
                      Abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    </Paragraph>
                </h1>
            </TitleContainer>
          </Section>
      )
    }
  }
  
  export default HomeTitle
  