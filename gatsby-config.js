/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteName: `Phong Do`,
    title: `Welcome to Phong Do's website`,
    description: `Blazing fast modern site generator for React`,
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
  },
  pathPrefix: `/blog`,
  plugins: [`gatsby-plugin-react-helmet`]
}