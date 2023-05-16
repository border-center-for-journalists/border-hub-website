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
        <button><a href="https://www.buymeacoffee.com/borderhub" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Donar</a></button>
      </DonateContainer>
    </React.Fragment>
  )
}

export default NormalDonateComponent
