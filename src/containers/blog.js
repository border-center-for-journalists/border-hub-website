import React, { Component } from "react"
import BlogComponent from "../components/blog"
import Prismic from "prismic-javascript"
import { Context } from "../lang/context"
// const BlogContainer = ({ data, darkMode, isFetching }) => {
class BlogContainer extends Component {
  static contextType = Context
  constructor(props) {
    super(props)
    this.state = {
      // data: this.props.data,
      data: [],
      isFetching: false,
      page: 1,
      fetchEnd: false,
    }
    this.noticeType = ""
  }
  componentDidMount() {
    this.ScrollEvent()
    this.inScroll = null
    this.noticeType =
      this.props.darkMode === true ? "noticias_especiales" : "noticias"
    this.FetchMoreListItems()
    window.addEventListener("scroll", this.ScrollEvent)
  }
  ScrollEvent = () => {
    clearTimeout(this.inScroll)
    this.inScroll = setTimeout(() => {
      const h = window.innerHeight || document.body.clientHeight
      const scroll = document.documentElement.scrollTop
      if (
        h - scroll - 100 <= scroll + 100 &&
        !this.state.isFetching &&
        !this.state.fetchEnd
      )
        this.FetchMoreListItems()
    }, 500)
  }
  FetchMoreListItems = () => {
    const { API_KEY, API_URL } = this.props.site
    this.setState({ isFetching: true })
    const query = this.props.category
      ? [
        Prismic.Predicates.at("document.type", this.noticeType),
        Prismic.Predicates.at('my.noticias.category', this.props.category.prismicId)
      ]
      : Prismic.Predicates.at("document.type", this.noticeType)
    Prismic.getApi(API_URL, { accessToken: API_KEY })
      .then(api =>
        api.query(query, {
          pageSize: 5,
          lang: this.context.locale_zone,
          page: this.state.page,
          orderings: `[my.${this.noticeType}.custom_publishdate desc]`
        })
      )
      .then(response => {
        const almostNewData = response.results.map(n => {
          const excerptLength = n.data.excerpt.length
          const titleLength = n.data.title.length
          const authorLength = n.data.author.length
          const excerptText = excerptLength ? n.data.excerpt[0].text : ""
          const titleText = titleLength ? n.data.title[0].text : ""
          const authorText = n.data.author && authorLength && n.data.author[0].name && n.data.author[0].name.length
            ? n.data.author[0].name[0].text
            : "Anónimo";

          return this.noticeType == "noticias_especiales" ? ({
            uid: n.uid,
            data: {
              banner: {
                thumbnail: { url: n.data.banner.thumbnail.url },
              },
              title: { text: titleText },
              excerpt: { text: excerptText },
              custom_publishdate: n.data.custom_publishdate,
              author: [{ name: { text: authorText } }],
            },
            showOnSpecialNews: n.data.show_on_special_news
          }) : ({
            uid: n.uid,
            data: {
              banner: {
                thumbnail: { url: n.data.banner.thumbnail.url },
              },
              title: { text: titleText },
              excerpt: { text: excerptText },
              custom_publishdate: n.data.custom_publishdate,
              author: [{ name: { text: authorText } }],
            },
          })
        })
        let newData;
        if (this.noticeType == "noticias_especiales") {
          newData = almostNewData.filter(n => n.showOnSpecialNews === null || n.showOnSpecialNews === true);
        } else {
          newData = almostNewData;
        }
        let newState = {
          data: [...this.state.data, ...newData],
          isFetching: false,
          page: this.state.page + 1,
        }
        if (newData.length === 0) {
          newState = {
            isFetching: false,
            fetchEnd: true,
          }
        }
        //console.log("GET MORE", newData)
        this.setState(newState)
      })
  }
  render() {
    const { darkMode } = this.props
    return (
      <BlogComponent
        darkMode={darkMode}
        data={this.state.data}
        isFetching={this.state.isFetching}
        fetchEnd={this.state.fetchEnd}
        category={this.props.category}
      />
    )
  }
}

export default BlogContainer
