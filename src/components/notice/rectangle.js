import React, { Component } from "react"    
import { Container, RectangleColorText, RectangleText, ColContainer}  from "../../theme/index.styled"

class RectangleComponent extends Component {
    render() {
      return (
        <Container size="medium">
            <ColContainer>
                <RectangleColorText> <b>Nemo enim ipsam voluptatem </b> quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</RectangleColorText>
                <RectangleText>  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</RectangleText>
            </ColContainer>
        </Container>
      )
    }
}

export default RectangleComponent