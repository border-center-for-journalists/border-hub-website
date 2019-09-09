import React from "react"
import {
  DonateContainer,
} from "./index.styled"

const NormalDonateComponent = () => {
  return (
    <React.Fragment>
      <DonateContainer size="medium" xlStaticSize>
        <i class="icon-donar" />
        <h2>El periodismo requiere de tu apoyo</h2>
        <p>Conviértete en miembro del Border Hub</p>
        <button> Donar </button>
      </DonateContainer>
    </React.Fragment>
  )
}

export default NormalDonateComponent
