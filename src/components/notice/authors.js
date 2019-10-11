import React from "react"
import {
  NoticeSectionTitle,
  Author,
  AuthorTitle,
  AuthorRol,
  AuthorProfile,
  Divider,
} from "./index.styled"
import { Container, Rows, Row } from "../../theme/index.styled"

const AuthorComponent = ({ color, align, author }) => {
  return (
    <Author color={color} align={align}>
      {author.user_picture && author.user_picture.url ? (
        <AuthorProfile align={align}>
          <img alt={author.name.text} src={author.user_picture.url} />
        </AuthorProfile>
      ) : (
        ""
      )}
        <Row>
        { author.name && author.name.text ? (
          <AuthorTitle align={align}>{author.name.text}</AuthorTitle>
        ) : (
          ""
        )}
          <ul>
            {author.email && author.email.text ? (
              <li>
                <i className="icon-email" /> {author.email.text}
              </li>
            ) : (
              ""
            )}
            {author.facebook && author.facebook.text ? (
              <li>
                <i className="icon-facebook" /> {author.facebook.text}
              </li>
            ) : (
              ""
            )}
            {author.twitter && author.twitter.text ? (
              <li>
                <i className="icon-twitter" /> {author.author_twitter.text}
              </li>
            ) : (
              ""
            )}
            {author.instagram && author.instagram.text? (
              <li>
                <i className="icon-insta" /> {author.instagram.text}
              </li>
            ) : (
              ""
            )}
          </ul>
        </Row>
    </Author>
  )
}

const AuthorsNoticeComponent = ({ color, authors, align }) => {
  let getTitle = special => {
    return special == "left" ? "Contacta al Autor" : "Créditos"
  }
  return (
    <Container size="medium" xlStaticSize>
      <Divider />
      {/**color={authors[0].color} align={authors[0].align} */}
      <NoticeSectionTitle align={align} color={color}>
        {getTitle(align)}
      </NoticeSectionTitle>
      <Rows align={align === "left" ? "start" : "space-around"} wrap rowM rowS>
        {authors.map((author, index) => (
          <AuthorComponent
            align={align}
            color={color}
            author={author}
            key={index}
          />
        ))}
      </Rows>
      <Divider />
    </Container>
  )
}

export default AuthorsNoticeComponent
