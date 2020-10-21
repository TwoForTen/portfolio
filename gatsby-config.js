/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [{
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
  }
],
}
