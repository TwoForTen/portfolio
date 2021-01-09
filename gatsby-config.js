/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Strapi",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "strapi",
        // Url to query from
        url: "https://enigmatic-bayou-56360.herokuapp.com/graphql",
        refreshInterval: 60
      },
    },
    {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      pure: true
    },
  },
  {
    resolve: `gatsby-plugin-react-i18next`,
    options: {
      path: `${__dirname}/locales`,
      languages: [`en`, `hr`],
      defaultLanguage: `en`,
      // you can pass any i18next options
      // pass following options to allow message content as a key
      i18nextOptions: {
        interpolation: {
          escapeValue: false // not needed for react as it escapes by default
        },
        // keySeparator: false,
        // nsSeparator: false
      },
      pages: []
    }
  },
],
}
