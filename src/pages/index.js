import React from "react"

//import { Link } from "gatsby"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotoRow from "../components/row"



const IndexPage = (props) => {
    const bio = props.data.allWordpressWpMe.edges[0].node.description;
    const username = props.data.allWordpressWpMe.edges[0].node.name;
    const avatar = props.data.allWordpressWpMe.edges[0].node.avatar_urls.wordpress_96;
    const photos = props.data.allWordpressPost.edges;

    const displayPhotos = () => {
        const photoArray = [];
        let photoRow = [];
        let count = 0;

        photos.map( photo => {
            if ( photo.node.featured_media ) {
                photoArray.push( photo );
            }
        } );

        return (
            photoArray.map( photo => {
                if ( photoRow.length === 3 ) {
                    photoRow = [];
                }

                photoRow.push( photo );
                count++;

                if ( photoRow.length === 3 ) {
                    return returnRow( photoRow, count );
                } else if ( photoArray.length - count === 0 ) {
                    return returnRow( photoRow, count );
                }
            } )
        )
    }

    const returnRow = ( photos, count ) => {
        return (
            <PhotoRow photos={ photos } key={ count } />
        )
    }
    
    return(
        <Layout
            bio = {bio}
            username = {username}
            avatar = {avatar}
        >
        <SEO title="Index" />
        {displayPhotos()}
        </Layout>
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
        allWordpressPost( sort: { fields: [ date ], order: DESC } ) {
			edges {
				node {
					id
					title
					slug
					date( formatString: "/YYYY/MM/DD/" )
					featured_media {
						localFile {
							childImageSharp {
								sizes( maxWidth: 1000 ) {
									...GatsbyImageSharpSizes
								}
							}
						}
					}
				}
			}
		}
    }
`