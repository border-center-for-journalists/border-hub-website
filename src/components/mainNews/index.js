import React, { Component } from "react"
import {
  MainNewsSection,
  Subtitle,
  NewsList,
} from "./index.styled"
import SecondaryComponent from "../news/secondary";
import MainComponent from "../news/main";
import { Context } from "../../lang/context";
class MainNewsComponent extends Component {
  static contextType = Context;
  
  render() {
    const { notice } = this.props;

    if (notice.nodes.length === 0) return null
    
    const category = this.props.category
    const text = category ? category.document[0].data.title.text : this.context.news.special_investigations
    const url  = category ? `${this.context.news.to_category}/${category.uid}` : this.context.news.to_specials

    return (
      <MainNewsSection>
        <Subtitle>
          <h1>{text}</h1>
          <a href={url}>{this.context.news.see_all}</a>
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
