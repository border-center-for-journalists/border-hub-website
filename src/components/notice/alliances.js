import React from "react"
import { NoticeSectionTitle } from "./index.styled"
import { Container, Rows } from "../../theme/index.styled"

const AlliancesNoticeContentComponent = ({ alliances }) => {
  const content = (
    <Container>
      <NoticeSectionTitle>Alianzas</NoticeSectionTitle>
      <Rows wrap align="center" vAlign="center" gap="10px">
        {alliances.map((alliance, index) =>
          alliance.alliance_image.url ? (
            <a href={alliance.alliance_image.url} key={index}>
              <img alt="" src={alliance.alliance_image.url} />
            </a>
          ) : (
              ""
            )
        )}
      </Rows>
    </Container>
  )
  return <React.Fragment>{alliances.length > 0 ? content : ""}</React.Fragment>
}

export default AlliancesNoticeContentComponent
