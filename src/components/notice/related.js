import React from "react"
import {MainNewSmall, MainNewSmallText} from "./index.styled"
import { Container, YellowTitle, AuthorContainer, Col, ImageWrapper } from "../../theme/index.styled"
import img from "../../theme/images/1.jpg"

const NormalRelatedComponent = () => {

  return (
    <React.Fragment>
      <Container size="medium">
          <YellowTitle>
              Notas Relacionadas
          </YellowTitle>
          <MainNewSmall>
                <Col>
                    <ImageWrapper>
                        <img alt="prueba" src={img} />
                    </ImageWrapper>
                </Col>
                <Col>
                <MainNewSmallText>
                    <h3>
                        Labore et dolore magna aliqua. Ut enim ad minim
                    </h3>
                    <AuthorContainer show={true}>
                        Marzo 12, 2019 | 13:45
                    </AuthorContainer>
                </MainNewSmallText>    
                </Col>
            </MainNewSmall>
      </Container>
    </React.Fragment>
  )
}

export default NormalRelatedComponent
