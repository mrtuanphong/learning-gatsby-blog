import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "./layout.css";
import Menu from "./menu";

export default function Layout({ children, data }) {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              siteName
            }
          }
        }
      `}
      render={data => (
        <div className="app">
          {/* page header: */}
          <Menu />
          
          {/* Page content: */}
          {children}
        </div>
      )}
    />
  
  )
}