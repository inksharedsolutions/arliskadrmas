import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import MidBook from "../components/front-book"
import Author from "../components/lower-main"
import Footer from "../components/footer"

const IndexPage = (props) => (
  <Layout>
    <Nav pathExt={props.path} />
    <Banner />
    <MidBook />
    <Author />
  </Layout>
)

export default IndexPage
