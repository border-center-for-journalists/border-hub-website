import React from "react"
import {
  NoticeSectionTitle,
  Author,
  AuthorTitle,
  AuthorRol,
} from "./index.styled"
import { Container, Rows } from "../../theme/index.styled"

const AuthorComponent = data => {
  return (
    <Author>
      <AuthorTitle>Diana Pérez</AuthorTitle>
      <AuthorRol>Author</AuthorRol>
      <ul>
        <li>
          <i>O</i> diana@spaceshiplabs.com
        </li>
        <li>
          <i>O</i> @diana
        </li>
      </ul>
    </Author>
  )
}

const AuthorsNoticeComponent = ({ data }) => {
  const authors = [1, 2, 3]
  return (
    <Container size="medium">
      <NoticeSectionTitle>Créditos</NoticeSectionTitle>
      <Rows align="space-between">
        {authors.map(a => (
          <AuthorComponent />
        ))}
      </Rows>
    </Container>
  )
}

export default AuthorsNoticeComponent
