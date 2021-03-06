import React from "react"
import { VerticalNotice } from "./index.styled"
import { Container, Rows, Row } from "../../theme/index.styled"
import { SPECIAL_NEWS_URL, NEWS_URL } from '../../utils/constants'

import moment from "moment"
import "moment/locale/es"
moment.locale("es")

const MultinotesContentComponent = ({ notice }) => {
  const { items } = notice
  const partial = items.map((item, index) => {
    if (!item.note || !item.note.document || !Array.isArray(item.note.document)) {
      return null;
    }
    const notice = item.note.document[0]
    const date = notice.data.custom_publishdate
    const urlSectionType = (notice.type == 'noticias_especiales') ? SPECIAL_NEWS_URL : NEWS_URL;
    return (
      <Row key={index} width="45%" widthXs="45%" widthXl="30%">
        <VerticalNotice>
          <a className="image" href={`/${urlSectionType}/${notice.uid}/`}>
            <img
              alt={`${notice.data.title.text}`}
              src={notice.data.banner.thumbnail.url}
            />
          </a>
          <div className="text-wrapper">
            <h3>
              <a href={`/${urlSectionType}/${notice.uid}/`}>{item.title_note.text}</a>
            </h3>
            <h4>
              <a href={`/${urlSectionType}/${notice.uid}/`}>{notice.data.title.text}</a>
            </h4>
            <div className="excerpt">
              {notice.data.excerpt.text.slice(0, 80)}
              {notice.data.excerpt.text.length > 80 ? " ..." : ""}
            </div>
            <div className="yellow-text">
              <p>
                <b>{moment(date).format("h:mm a")}</b>
              </p>
              <p>{moment(date).format("MMMM DD [|] YYYY")}</p>
            </div>
          </div>
        </VerticalNotice>
      </Row>
    )
  })
  return (
    <React.Fragment>
      <Container padding>
        <Rows wrap gap="2.5%" align="center">
          {partial}
        </Rows>
      </Container>
    </React.Fragment>
  )
}

export default MultinotesContentComponent
