/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = (props) => {
  
  return (
    <>
    <div>
        <Header 
        bio = {props.bio}
        username = {props.username}
        avatar = {props.avatar}
        />
     
      <div
        style={{
          margin: `0 auto`,
          width: '100%',
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      </div>
      </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

