const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'Portfolio - Đạt Nguyễn',
    siteUrl: `https://www.tada247.xyz`,
    description:
      'I develop responsive, optimized and efficient websites. Currently available for freelance opportunities.',
    image: '/tadathumbnail.png',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_ID,
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: true, // remove viewBox when possible (default)
          cleanupIDs: true, // remove unused IDs and minify remaining IDs (default)
          removeDimensions: true,
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
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
