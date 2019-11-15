import React from "react"

//import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"

const IndexPage = (props) => {

  const bio = props.data.allWordpressWpMe.edges[0].node.description;
	const username = props.data.allWordpressWpMe.edges[0].node.name;
  const avatar = props.data.allWordpressWpMe.edges[0].node.avatar_urls.wordpress_96;
  
  return(
  <Layout  
    bio = {bio}
    username= {username}
    avatar = {avatar}
  />
)
}

export default IndexPage

export const pageQuery = graphql`
	query IndexQuery {
		allWordpressWpMe {
			edges {
				node {
					name
					description
					avatar_urls {
						wordpress_96
					}
				}
			}
		}
	}
`