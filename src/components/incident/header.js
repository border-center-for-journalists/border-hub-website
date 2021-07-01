import React from "react"
import {
  NoticeTitleWrapper,
  ImageWrapper
} from "./single.styled"
import { Container, ParticipantOrganizations } from "../../theme/index.styled"
import moment from "moment"
import "moment/locale/es"
moment.locale("es")

const HeaderIncidentComponent = ({ notice, align }) => {
  const { title, banner, excerpt, organizaciones_participantes = [] } = notice.data
  const date = notice.data.custom_publishdate
    ? notice.data.custom_publishdate
    : notice.last_publication_date
  return (
    <Container size="full" xlStaticSize>
      <Container size="medium" xlStaticSize>
        <NoticeTitleWrapper align={align}>
          <h1>{title.text}</h1>
          <p>{moment(date).format("MMMM DD, YYYY [|] h:mm a")}</p>
          <hr />
          <p>{excerpt.text}</p>
          <br/>
          {organizaciones_participantes.length > 0  ? <strong>Organizaciones participantes:</strong> : "" }
          {organizaciones_participantes.length > 0  ? (
            <ParticipantOrganizations>
              {organizaciones_participantes.map(organization => (
                <img src={organization.image.url} />   
              ))}
            </ParticipantOrganizations>
          ): "" }

        </NoticeTitleWrapper>
      </Container>
      
      {banner.url ? (
        <ImageWrapper>
          <img alt={banner.alt} src={banner.url} />
        </ImageWrapper>
      ) : (
          ""
      )}  
    </Container>
  )
}

export default HeaderIncidentComponent
