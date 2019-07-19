import React from "react"
import { NoticeSectionTitle } from "./index.styled"
import { Container, Rows } from "../../theme/index.styled"
import img from "../../theme/images/1.jpg"

const AlliancesNoticeContentComponent = ({ alliances }) => {
  return (
    <React.Fragment>
      <Container>
        <NoticeSectionTitle>Alianzas</NoticeSectionTitle>
        <Rows wrap align="center" vAlign="center" gap="10px">
          {alliances.map((alliance, index) => (
            <a href={alliance.alliance_url.url}>
              <img alt="" src={alliance.alliance_image.url} />
            </a>
          ))}
        </Rows>
      </Container>
    </React.Fragment>
  )
}

export default AlliancesNoticeContentComponent
