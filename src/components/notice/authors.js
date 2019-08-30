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

const AuthorComponent = ({ color, author }) => {
  console.log("au", author)
  return (
    <Author color={color}>
      { (author.user_picture && author.user_picture.url) ? (
        <AuthorProfile>
          <img alt={author.name.text} src={author.user_picture.url} />
        </AuthorProfile>
      ) : (
        ""
      )}
      {author.author_profile && author.author_profile.url ? (
        <AuthorProfile>
          <img alt={author.author_name.text} src={author.author_profile.url} />
        </AuthorProfile>
      ) : (
        ""
      )}
      {author.name && author.name.text ? (
        <AuthorTitle align="center">{author.name.text}</AuthorTitle>
      ) : (
        ""
      )}
      {author.author_name && author.author_name.text ? (
        <AuthorTitle align="center">{author.author_name.text}</AuthorTitle>
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
        {author.author_email && author.author_email.text ? (
          <li>
            <i className="icon-email" /> {author.author_email.text}
          </li>
        ) : (
          ""
        )}
        {author.twitter && author.twitter.text ? (
          <li>
            <i className="icon-twitter" /> {author.twitter.text}
          </li>
        ) : (
          ""
        )}
        {author.author_twitter && author.author_twitter.text ? (
          <li>
            <i className="icon-twitter" /> {author.author_twitter.text}
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
        {author.author_facebook && author.author_facebook.text ? (
          <li>
            <i className="icon-facebook" /> {author.author_facebook.text}
          </li>
        ) : (
          ""
        )}
      </ul>
    </Author>
  )
}

const AuthorsNoticeComponent = ({ color, authors, align }) => {
  let getTitle = (special) =>{
    return special ? "Créditos" : "Contacta al Autor"
  }
  return (
    <Container size="medium">
      <Divider />
      {/**color={authors[0].color} align={authors[0].align} */}
      <NoticeSectionTitle align={align} color={color}>{getTitle()}</NoticeSectionTitle>
      <Rows align="space-between">
        {authors.map((author, index) => (
          <AuthorComponent color={color} author={author} key={index} />
        ))}
      </Rows>
      <Divider />
    </Container>
  )
}

export default AuthorsNoticeComponent
