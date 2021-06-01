const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'portfolio-gatsby-v3',
    siteUrl: `https://portfoliomain81955.gatsbyjs.io`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_ID,
        dataset: 'production',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },

    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // {
    //   resolve: `gatsby-plugin-intl`,
    //   options: {
    //     // language JSON resource path
    //     path: `${__dirname}/src/intl`,
    //     // supported language
    //     languages: [`en`],
    //     // language file path
    //     defaultLanguage: `en`,
    //     // option to redirect to `/ko` when connecting `/`
    //     redirect: true,
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
