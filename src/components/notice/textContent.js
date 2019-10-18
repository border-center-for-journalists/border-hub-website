import React from "react"
import { TextWrapper } from "./index.styled"
import { Container } from "../../theme/index.styled"
import ImageModal from "../lightbox/index"

const TextNoticeContentComponent = ({ notice }) => {
  const getObjectType= (elem) => {
    let urlRegex=/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/
    if(urlRegex.test(elem)){
      let imageAlt = elem.split(',') 
      return { type: 'image', img: imageAlt[0], alt: imageAlt[1] }
    } 
    return { type: 'text', data: elem }
  }
  const getSections = (htmlContent) => {
    let splitted = htmlContent.split('IMG')
    return splitted.reduce((acc,elem) => {
      acc.push(getObjectType(elem))
      return acc
    }, [])
  }
  const getContent = () => {
    return notice.primary
    ? getSections(notice.primary.content.html)
    : getSections(notice.data.content.html)
  }
  const getColor = () => {
    return notice.primary ? "white" : "black"
  }
  const htmlElements = getContent()
  return (
    <React.Fragment>
      <Container size="medium" xlStaticSize>
        {
          htmlElements.map((obj) => {
            if(obj.type == 'text')
              return (
                <TextWrapper
                  color={getColor()}
                  dangerouslySetInnerHTML={{ __html: obj.data }}
                />
              )
            return <ImageModal alt={obj.alt} src={obj.img}></ImageModal>
          })
        }
      </Container>
    </React.Fragment>
  )
}

export default TextNoticeContentComponent
