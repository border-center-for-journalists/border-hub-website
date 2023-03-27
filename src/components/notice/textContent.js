import React, { useState } from "react"
import { TextWrapper } from "./index.styled"
import { Container } from "../../theme/index.styled"
import ImageModal from "../lightbox/index"

const TextNoticeContentComponent = ({ notice }) => {
  const getSections = (htmlContent) => {
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
  const getContent = () => {
    return notice.primary
      ? getSections(notice.primary.content.html)
      : getSections(notice.data.content.html)
  }
  const getColor = () => {
    return notice.primary ? "white" : "black"
  }
  const [isJustified, setIsJustified] = useState(true)
  const toggleAlignment = () => {
    setIsJustified(!isJustified)
  }
  const htmlElements = getContent()
  return (
    <React.Fragment>
      <Container size="medium" xlStaticSize>
        <button className="alignbutton" onClick={toggleAlignment}>{isJustified ? "Izq." : "X"}</button>
        {
          htmlElements.map((obj) => {
            if (obj.type == 'text')
              return (
                <TextWrapper
                  color={getColor()}
                  dangerouslySetInnerHTML={{ __html: obj.data }}
                  style={{ textAlign: isJustified ? 'justify' : 'left' }}
                />
              )
            return <ImageModal color={getColor()} alt={obj.alt} src={obj.img}></ImageModal>
          })
        }
      </Container>
    </React.Fragment>
  )
}

export default TextNoticeContentComponent
