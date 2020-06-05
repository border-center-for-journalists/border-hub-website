import React, { Component } from "react"
import Prismic from "prismic-javascript"
import MainNewsComponent from "../mainNews"

class CategoryBlockComponent extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isFetching: false
    }
  }
  componentDidMount() {
    //console.log('category',this.props.category)
    this.fetchMoreListItems()
  }
  fetchMoreListItems = () => {
    const { API_KEY, API_URL } = this.props.site
    this.setState({ isFetching: true })
    
    Prismic.getApi(API_URL, { accessToken: API_KEY })
      .then(api =>
        api.query([
          Prismic.Predicates.at("document.type", 'noticias'),
          Prismic.Predicates.at('my.noticias.category', this.props.category.category.id)
        ], {
          pageSize: 3,
          page: 1,
          orderings: `[my.noticias.custom_publishdate desc]`
        })
      )
      .then(response => {
        const newData = response.results.map(n => {
          const excerptLength = n.data.excerpt.length
          const titleLength = n.data.title.length
          const authorLength = n.data.author.length
          const excerptText = excerptLength ? n.data.excerpt[0].text : ""
          const titleText = titleLength ? n.data.title[0].text : ""
          const authorText = authorLength
            ? n.data.author[0].name[0].text
            : "Anónimo"

          return {
            uid: n.uid,
            data: {
              banner: {
                url: n.data.banner.url,
                thumbnail: { url: n.data.banner.thumbnail.url },
              },
              title: { text: titleText },
              excerpt: { text: excerptText },
              custom_publishdate: n.data.custom_publishdate,
              author: [{ name: { text: authorText } }],
            },
          }
        })
        let newState = {
          data: [...this.state.data, ...newData],
          isFetching: false,
        }
        if (newData.length === 0) {
          newState = {
            data: [],
            isFetching: false,
          }
        }
        //console.log("GET MORE CATEGORY",this.props.category.category.document[0].data.title, newData)
        this.setState(newState)
      })
  }
  render() {
    return (
      (!this.props.category || this.state.data.length === 0 || this.props.category.active )
      ? null
        : <MainNewsComponent
          category={this.props.category.category}
          notice={{nodes:this.state.data}}
        />
    )
  }
}

export default CategoryBlockComponent