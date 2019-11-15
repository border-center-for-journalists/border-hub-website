import React, { Component } from "react"
import BlogComponent from "../components/blog"
import Prismic from "prismic-javascript"

// const BlogContainer = ({ data, darkMode, isFetching }) => {
class BlogContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      isFetching: false,
      page: 2,
      fetchEnd: false,
    }
    this.noticeType = '';
  }
  componentDidMount() {
    this.ScrollEvent()
    this.inScroll = null
    this.noticeType =
      this.props.darkMode === true ? "noticias_especiales" : "noticias"
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
    Prismic.getApi(API_URL, { accessToken: API_KEY })
      .then(api =>
        api.query(Prismic.Predicates.at("document.type", this.noticeType), {
          pageSize: 5,
          page: this.state.page,
        })
      )
      .then(response => {
        const newData = response.results.map(n => {
          const excerptLength = n.data.excerpt.length;
          const titleLength = n.data.title.length;
          const authorLength = n.data.author.length;
          const excerptText = excerptLength ? n.data.excerpt[0].text : "";
          const titleText = titleLength ? n.data.title[0].text : "";
          const authorText = authorLength ? n.data.author[0].name[0].text : "Anónimo";

          return ({
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
        console.log("GET MORE", newData)
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
      />
    )
  }
}

export default BlogContainer
