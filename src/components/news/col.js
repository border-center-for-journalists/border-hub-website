import React, { Component } from "react"
import {
  ColContainer,
  ColHero,
  ColDetails,
  ColTitle,
  ColText,
  ColFooter,
} from "./index.styled"
import { getDate } from "../../utils/generic"

class ColComponent extends Component {
  render() {
    const { notice, section, darkMode } = this.props
    const { uid, data } = notice
    const { title, banner, excerpt, custom_publishdate } = data
    
    return (
      <ColContainer darkMode={darkMode}>
        <ColHero>
          <a href={`/${section}/${uid}/`}>
            <img
              src={banner.thumbnail.url}
              alt={banner.alt || banner.thumbnail.url || title.text}
            />
          </a>
        </ColHero>
        <ColDetails>
          <ColTitle darkMode={darkMode}>
            <a href={`/${section}/${uid}/`}>{title.text}</a>
          </ColTitle>
          {excerpt ? (
            <ColText darkMode={darkMode}>
              <p>{excerpt.text.slice(0, 100) + "..."}</p>
            </ColText>
          ) : null}

          <ColFooter darkMode={darkMode}>
            {getDate(custom_publishdate)}
          </ColFooter>
        </ColDetails>
      </ColContainer>
    )
  }
}
export default ColComponent
