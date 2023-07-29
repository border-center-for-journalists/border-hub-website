import React, { useContext } from "react"
import {
  Section,
  Message,
} from "../../theme/index.styled"
import { MainNewsSection, Subtitle, NewsList } from "./index.styled"
import SecondaryComponent from "../news/secondary"
import { Context } from "../../lang/context"
const BlogComponent = ({ data, darkMode, isFetching, fetchEnd, category }) => {
  const lang = useContext(Context)
  const title = category
    ? `${category.data.title.text}`
    : darkMode === true
    ? lang.news.special_investigations
    : lang.news.news

  const url = "/" + lang.locale + "/" + 
    ((title === lang.news.news || category) ? lang.news.to_recent_news : lang.news.to_specials)
  console.log(url);
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
            <span>{lang.news.loading}...</span>
          </Message>
        ) : (
          ""
        )}
        {fetchEnd && !isFetching ? (
          <Message darkMode={darkMode}>
            <span>{lang.news.all_results}</span>
          </Message>
        ) : (
          ""
        )}
      </MainNewsSection>
    </Section>
  )
}

export default BlogComponent
