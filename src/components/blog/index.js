import React from "react"
import {
  Section,
  Message,
} from "../../theme/index.styled"
import { MainNewsSection, Subtitle, NewsList } from "./index.styled"
import SecondaryComponent from "../news/secondary"
import { SPECIAL_NEWS_URL, NEWS_URL } from "../../utils/constants"

const BlogComponent = ({ data, darkMode, isFetching, fetchEnd, category }) => {
  const title = category
    ? `${category.data.title.text}`
    : darkMode === true
    ? "Investigaciones Especiales"
    : "Noticias"

  const url = title === "Noticias" ? NEWS_URL : SPECIAL_NEWS_URL
  return (
    <Section paddingTop={!category && darkMode === true} darkMode={darkMode}>
      <MainNewsSection>
        <Subtitle>
          <h1>
            {title}
          </h1>
        </Subtitle>

        <NewsList>
          {data.map((notice, index) => (
            <li key={index}>
              <SecondaryComponent url={url} darkMode={darkMode} size={"contain"} notice={notice} />
            </li>
          ))}
        </NewsList>

        {isFetching && !fetchEnd ? (
          <Message darkMode={darkMode}>
            <span>Cargando noticias ...</span>
          </Message>
        ) : (
          ""
        )}
        {fetchEnd && !isFetching ? (
          <Message darkMode={darkMode}>
            <span>Se han cargado todas las noticias</span>
          </Message>
        ) : (
          ""
        )}
      </MainNewsSection>
    </Section>
  )
}

export default BlogComponent
