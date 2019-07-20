import React, { Component } from "react"    
import { GeneralNewsSection, GeneralTitle, Quote, RectangleColorText, RectangleText, ColContainer } from "./index.styled"
import tempImg from "../../theme/images/2.jpg"
import { ImageWrapper}  from "../../theme/index.styled"

class GeneralComponent extends Component {
    render() {
      return (
        <GeneralNewsSection>
            <GeneralTitle>
                <h1>"General" lorem ipsum dolor sit amet, consectetur adipising elit.</h1>
                <h3>Labore et dolore magna aliqua. Ut enim ad minim veniam rud exercitation ullamco laboris nisi ut aliquip ex ea commodo...</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <ul>
                  <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</li>
                  <li>dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</li>
                  <li>Sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                  <li>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
                  <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</li>
                </ul>
                <ImageWrapper>
                  <img alt="prueba" src={tempImg} />
                </ImageWrapper>
                <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <Quote> "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem." <b>Sequi nesciunt</b> </Quote>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                <ol>
                  <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</li>
                  <li>dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</li>
                  <li>Sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                  <li>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
                  <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</li>
                </ol>
                <ColContainer>
                  <RectangleColorText> <b>Nemo enim ipsam voluptatem </b> quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</RectangleColorText>
                  <RectangleText>  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</RectangleText>
                </ColContainer>
            </GeneralTitle>
        </GeneralNewsSection>
      )
    }
}

export default GeneralComponent