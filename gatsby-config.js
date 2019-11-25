//This part is necessary to get .env file content into process.env in Gatsby
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

//Normal config declarations
module.exports = {
  siteMetadata: {
    title: `Gatsby Wordpress Site`,
    description: `Gatsby photo site fetching from a wordpress site`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
			resolve: 'gatsby-source-wordpress',
			options: {
				baseUrl: process.env.BASE_URL,
				protocol: 'https',
				hostingWPCOM: true,
				useACF: false,
				auth: {
					wpcom_app_clientSecret: process.env.CLIENT_SECRET,
					wpcom_app_clientId: process.env.CLIENT_ID,
					wpcom_user: process.env.WPCOM_USER,
					wpcom_pass: process.env.WPCOM_PASS,
				},
				verboseOutput: false,
			},
		}, 
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
