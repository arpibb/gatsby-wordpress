import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from "gatsby"

// Internal
import Header from '../components/header';
import "./single-photo.css"

const SinglePhoto = ( props ) => {
	const bio = props.data.allWordpressWpMe.edges[0].node.description;
	const username = props.data.allWordpressWpMe.edges[0].node.name;
    const avatar = props.data.allWordpressWpMe.edges[0].node.avatar_urls.wordpress_96;
    const photo = props.data.allWordpressPost.edges[0];

	return (
		<div>
			<Header bio={ bio } avatar={ avatar } username={ username } />
			<div
			style={ {
				textAlign: "center",
			} }
			>
				<img 
				src = { photo.node.featured_media.localFile.childImageSharp.sizes.src } 
				style={ {
						width: 'auto',
						height: 'auto',
					} }></img>
				</div>
		</div>
	)
}

export default SinglePhoto;

SinglePhoto.propTypes = {
	data: PropTypes.object
}

export const pageQuery = graphql`
	query PhotoQuery($slug: String!) {
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
        allWordpressPost(filter: { slug: { eq: $slug }}) {
            edges {
              node {
                id
                title
                slug
                date(formatString: "/YYYY/MM/DD/")
                featured_media {
                  localFile {
                    childImageSharp {
                      id
                      sizes {
                        src
                        sizes
                      }
                    } 
                  }
                }
              }
            }
        }
	}
`