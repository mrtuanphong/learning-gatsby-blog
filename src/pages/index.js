import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import Tabletop from "../components/Tabletop";
import { Helmet } from "react-helmet";

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <meta name="author" content={data.site.siteMetadata.author} />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-5xl">Welcome to {data.site.siteMetadata.name}</h1>
      <Tabletop />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        name,
        author,
        title,
        description,
        keywords
      }
    }
  }
`