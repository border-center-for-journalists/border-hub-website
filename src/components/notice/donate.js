import React from "react"
import {
  DonateContainer,
} from "./index.styled"

const NormalDonateComponent = () => {
  return (
    <React.Fragment>
      <DonateContainer size="medium" xlStaticSize>
        <i className="icon-donar" />
        <h2>El periodismo requiere de tu apoyo</h2>
        <p>Conviértete en miembro del Border Hub</p>
          <a
            href="https://www.buymeacoffee.com/borderhub"
            target="_blank"
            className="bmc-button"
            rel="noopener noreferrer"
            style={{
              margin: "1.23em auto 0"
            }}
          >
            Donar
          </a>
      </DonateContainer>
    </React.Fragment>
  )
}

export default NormalDonateComponent
