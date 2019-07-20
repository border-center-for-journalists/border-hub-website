import React from "react"
import { NoticeTitleWrapper, Share, YellowText } from "./index.styled"
import { Container, Rows } from "../../theme/index.styled"

const HeaderNoticeComponent = ({ data, type }) => {
  //const { publish_date, title, authors } = data
  return (
    <Container size="medium">
      <NoticeTitleWrapper>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </h1>
        <p>
          <i>
            Por <YellowText>Diana Pérez |</YellowText> En alianza con{" "}
            <u>Reforma</u>
          </i>
        </p>
        <p>Marzo 12, 2019 | 13:45</p>
        <hr />
        <Rows align="flex-end">
          <Share>a</Share>
          <Share>a</Share>
          <Share>a</Share>
          <Share>a</Share>
        </Rows>
      </NoticeTitleWrapper>
    </Container>
  )
}

export default HeaderNoticeComponent
