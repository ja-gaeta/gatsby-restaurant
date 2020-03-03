import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Hello from Gatsby!</h3>
    <div className="container">
      <div className="row">
        <div className="col-6">Hello world</div>
        <div className="col-6">Hello world</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
