/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-apollo`,
      options: {
        uri: `http://msjoyretailloadbalancer-1674759434.ca-central-1.elb.amazonaws.com/msjoytemp/graphql`
      }
    },
  ],
}
