import React from "react"
import {
  NoticeSectionTitle,
  Author,
  AuthorTitle,
  AuthorRol,
  AuthorProfile,
  Divider,
} from "./index.styled"
import { Container, Rows } from "../../theme/index.styled"

const AuthorComponent = ({ author }) => {
  return (
    <Author color={author.color}>
      {author.author_profile.url ? (
        <AuthorProfile>
          <img alt={author.author_name.text} src={author.author_profile.url} />
        </AuthorProfile>
      ) : (
        ""
      )}
      <AuthorTitle align={author.align}>{author.author_name.text}</AuthorTitle>
      <AuthorRol align={author.align}>{author.author_rol.text}</AuthorRol>
      <ul>
        {author.author_email.text ? (
          <li>
            <i>O</i> {author.author_email.text}
          </li>
        ) : (
          ""
        )}
        {author.author_twitter.text ? (
          <li>
            <i>O</i> {author.author_twitter.text}
          </li>
        ) : (
          ""
        )}
        {author.author_facebook.text ? (
          <li>
            <i>O</i> {author.author_facebook.text}
          </li>
        ) : (
          ""
        )}
      </ul>
    </Author>
  )
}

const AuthorsNoticeComponent = ({ authors }) => {
  return (
    <Container size="medium">
      <Divider />
      <NoticeSectionTitle color={authors[0].color} align={authors[0].align}>Créditos</NoticeSectionTitle>
      <Rows align="space-between">
        {authors.map((author, index) => (
          <AuthorComponent author={author} key={index} />
        ))}
      </Rows>
      <Divider />
    </Container>
  )
}

export default AuthorsNoticeComponent
