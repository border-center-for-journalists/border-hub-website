import React from "react"
import {
  DonateContainer,
} from "./index.styled"
import { Container, Rows } from "../../theme/index.styled"
import img from "../../theme/images/1.jpg"

const NormalDonateComponent = () => {

  return (
    <React.Fragment>
      <DonateContainer size="medium">
          <h2>El periodismo requiere de tu apoyo</h2>
          <p>Conviértete en miembro del Border Hub</p>
          <button> Donar </button>

      </DonateContainer>
    </React.Fragment>
  )
}

export default NormalDonateComponent
