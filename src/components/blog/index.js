import React from "react"
import {
  Section,
  Message,
} from "../../theme/index.styled"
import { MainNewsSection, Subtitle, NewsList } from "./index.styled"
import SecondaryComponent from "../news/secondary"

const BlogComponent = ({ data, darkMode, isFetching, fetchEnd, category }) => {
  return (
    <Section paddingTop={!category && darkMode === true} darkMode={darkMode}>
      <MainNewsSection>
        <Subtitle>
          <h1>
            {category
              ? `${category.data.title.text}`
              : darkMode === true
              ? "Investigaciones Especiales"
              : "Noticias"}
          </h1>
        </Subtitle>

        <NewsList>
          {data.map((notice, index) => (
            <li key={index}>
              <SecondaryComponent darkMode={darkMode} size={"contain"} notice={notice} />
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
