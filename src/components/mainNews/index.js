import React, { Component } from "react"
import {
  MainNewsSection,
  Subtitle,
  NewsList,
} from "./index.styled"
import SecondaryComponent from "../news/secondary";
import MainComponent from "../news/main";

class MainNewsComponent extends Component {
  render() {
    const { notice } = this.props;

    if (notice.nodes.length === 0) return null
  
    
    const category = this.props.category
    const text = category ? category.document[0].data.title.text : "Investigaciones Especiales"
    const url  = category ? `/categoria/${category.uid}` : "/noticias-especiales/"

    return (
      <MainNewsSection>
        <Subtitle>
          <h1>{text}</h1>
          <a href={url}>Ver todas</a>
        </Subtitle>
        <NewsList>
          {
            notice.nodes.map((data, index) => {
              return (
                <li key={index}>
                  {index === 0
                    ? <MainComponent notice={data} />
                    : <SecondaryComponent darkMode={false} size={"cover"} notice={data} />}
                </li>
              )
            })
          }  
        </NewsList>
      </MainNewsSection>
    )
  }
}

export default MainNewsComponent
