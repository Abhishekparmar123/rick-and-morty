/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "allApiData",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "allApiData",
        // Url to query from
        url: "https://rickandmortyapi.com/graphql",
      },
    },
  ],
}
