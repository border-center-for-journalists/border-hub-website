import React, { Component } from "react"
import { Container } from "../../theme/index.styled"
import { GeneralNewsSection, GeneralTitle } from "./index.styled"
import ImageModal from "../lightbox/index"
import { TextWrapper } from "../notice/index.styled"

class GeneralComponent extends Component {
  getSections = (htmlContent) => {
    let splitted = [];
    let openIMG = false;
    let htmlStr = htmlContent;
    while (htmlStr.search('OBJIMG') > -1) {
      const firstIndex = htmlStr.search('OBJIMG');
      if (!openIMG) {
        splitted.push({ data: htmlStr.slice(0, firstIndex), type: 'text' });
      } else {
        const imgparts = htmlStr.slice(0, firstIndex).split('|');
        splitted.push({
          img: imgparts[0],
          alt: imgparts.length > 0 ? imgparts[1] : '',
          type: 'image'
        });
      }
      const aux = htmlStr.slice(firstIndex + 6);
      htmlStr = aux;
      openIMG = !openIMG;
    }
    splitted.push({ data: htmlStr, type: 'text' })
    return splitted;
  }
  render() {
    const { title, content } = this.props.data
    const htmlElements = this.getSections(content.html)
    return (
      <GeneralNewsSection>
        <Container xlStaticSize>
          <GeneralTitle>
            <h1>{title.text}</h1>
            {
              htmlElements.map((obj) => {
                if (obj.type == 'text')
                  return (
                    <TextWrapper
                      color="black"
                      dangerouslySetInnerHTML={{ __html: obj.data }}
                    />
                  )
                return <img  alt={obj.alt} src={obj.img} />
              })
            }
            {/* <div dangerouslySetInnerHTML={{ __html: content.html }} /> */}
          </GeneralTitle>
        </Container>
      </GeneralNewsSection>
    )
  }
}

export default GeneralComponent
