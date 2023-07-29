import React from "react"

import Layout from "../components/layoutEN"
import SEO from "../components/seo"
import { Context, EN } from "../lang/context"

const NotFoundPage = () => (
  <Context.Provider value={EN}>
    <Layout>
      <SEO title="404: Not found" />
      <div
        style={{
          marginTop: "100px",
          minHeight: "calc(100vh - 247px)",
          marginLeft: "40px",
        }}
      >
        <h1>404: NOT FOUND</h1>
        <p>The requested page doesn't exist :(</p>
      </div>
    </Layout>
  </Context.Provider>
)

export default NotFoundPage
