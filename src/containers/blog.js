import React from "react"
import { Section, Container } from "../theme/index.styled"
import BlogComponent from "../components/blog"

const BlogContainer = ({ data, darkMode }) => {
  return <BlogComponent darkMode={darkMode} data={data} />
}

export default BlogContainer
