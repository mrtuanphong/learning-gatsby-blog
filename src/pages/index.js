import React from "react";
import Layout from "../components/layout";
import Tabletop from "../components/Tabletop";
import { Helmet } from "react-helmet";

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-5xl">Welcome to {data.site.siteMetadata.siteName}</h1>
      {/* <Tabletop /> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`