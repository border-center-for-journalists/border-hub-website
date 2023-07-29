import React from "react"

import Layout from "../components/layoutES"
import SEO from "../components/seo"
import { Context, ES } from "../lang/context"

const NotFoundPage = () => (
  <Context.Provider value={ES}>
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
        <p>La página que estas buscando no existe :(</p>
      </div>
    </Layout>
  </Context.Provider>
)

export default NotFoundPage
