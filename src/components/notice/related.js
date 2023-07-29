import React from "react"
import { MainNewSmall, MainNewSmallText } from "./index.styled"
import {
  Container,
  YellowTitle,
  AuthorContainer,
  Col,
  ImageWrapper,
} from "../../theme/index.styled"

import moment from "moment"
import "moment/locale/es"
moment.locale("es")

const NormalRelatedComponent = ({ color, related, lang }) => {
  const getDate = date => moment(date).format("MMMM DD, YYYY [|] h:mm a")
  return (
    <React.Fragment>
      <Container size="medium" xlStaticSize>
        <YellowTitle>{lang.news.news_related}</YellowTitle>
        {related.slice(0, 5).map((item, index) => {
          const urlSectionType = `${lang.locale}/` + (item.type == 'noticias_especiales' ? lang.news.to_specials
           : lang.news.to_recent_news)
          return (
            <MainNewSmall key={index}>
              <Col>
                <ImageWrapper>
                  <a href={`/${urlSectionType}/${item.uid}/`}>
                    {item.data.banner.thumbnail &&
                      item.data.banner.thumbnail.url ? (
                        <img alt="prueba" src={item.data.banner.thumbnail.url} />
                      ) : (
                        ""
                      )}
                  </a>
                </ImageWrapper>
              </Col>
              <Col>
                <MainNewSmallText color={color}>
                  <h3>
                    <a href={`/${urlSectionType}/${item.uid}/`}>{item.data.title[0].text}</a>
                  </h3>
                  <AuthorContainer color={color} show={true}>
                    {getDate(
                      item.type === "noticias"
                        ? item.data.custom_publishdate
                        : item.last_publication_date
                    )}
                  </AuthorContainer>
                </MainNewSmallText>
              </Col>
            </MainNewSmall>
          )
        }
        )}
      </Container>
    </React.Fragment>
  )
}

export default NormalRelatedComponent
