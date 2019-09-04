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

const AuthorComponent = ({ color, author, align }) => {
  return (
    <Author color={color} align={align}>
      {author.user_picture && author.user_picture.url ? (
        <AuthorProfile align={align}>
          <img alt={author.name.text} src={author.user_picture.url} />
        </AuthorProfile>
      ) : (
        ""
      )}
      {author.author_profile && author.author_profile.url ? (
        <AuthorProfile align={align}>
          <img alt={author.author_name.text} src={author.author_profile.url} />
        </AuthorProfile>
      ) : (
        ""
      )}
      {author.name && author.name.text ? (
        <Row>
          <AuthorTitle align="left">{author.name.text}</AuthorTitle>
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
            {author.facebook && author.facebook.text ? (
              <li>
                <i className="icon-facebook" /> {author.facebook.text}
              </li>
            ) : (
              ""
            )}
          </ul>
        </Row>
      ) : (
        ""
      )}
      {author.author_name && author.author_name.text ? (
        <AuthorTitle align="center">{author.author_name.text}</AuthorTitle>
      ) : (
        ""
      )}
      <ul>
        {author.author_email && author.author_email.text ? (
          <li>
            <i className="icon-email" /> {author.author_email.text}
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
