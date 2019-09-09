import React from "react"
import { Section, Container, TitleYellow } from "../../theme/index.styled"
import SubNewComponent from "../mainNews/subNews"

const BlogComponent = ({ data, darkMode }) => {
  console.log("DATA", darkMode)
  return (
    <Section paddingTop darkMode={darkMode}>
      <Container xlStaticSize>
        <TitleYellow>
          Noticias {darkMode === true ? "Especiales" : ""}
        </TitleYellow>
        {data.map((notice, index) => (
          <SubNewComponent darkMode={darkMode} notice={notice} key={index} />
        ))}
      </Container>
    </Section>
  )
}

export default BlogComponent
