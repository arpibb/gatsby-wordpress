import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
//import { graphql } from "gatsby"

const Header = (props) => {

	const username = props.username;
	const src = props.avatar;
	const bio = props.bio;

  return(
    <header
    style={ {
      display: 'flex',
      alignItems: 'center',
	  justifyContent: 'center',
	  maxWidth: "800px",
	  margin: "0 auto",
    }}
      >
      <div
			style={ {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				//flexWrap: 'wrap',
        margin: '2em 2em',
			} }
		>
			<span
				style={ {
					flexBasis: '120px',
          			height: '96px',
				} }
			>
				<img
					src={ src }
					alt={ `Psycho Dude` }
					style={ {
						marginBottom: 0,
						borderRadius: "50%",
						marginRight: "35px",
					} }
				/>
			</span>
			<span
				style={ {
					flexBasis: '500px',
					flexGrow: 1,
				} }
			>
				<Link
					to='/'
					activeStyle={ {
        				textDecoration: 'none',
        				color: '#000000'	
      				} }
				>
					<h3
						dangerouslySetInnerHTML={ { __html: ( username ) } }
						style={ { marginBottom: '0.2em' } }
					/>
				</Link>
				<p 
					style={ { marginBottom: 0 } }
					dangerouslySetInnerHTML={ { __html: ( bio ) } }
				/>
			</span>
		</div>


  </header>
)
}

Header.propTypes = {
    src: PropTypes.string,
    username: PropTypes.string,
    bio: PropTypes.string,
}

export default Header

