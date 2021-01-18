const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
    dotenv.config();
}

const { SPACE_ID, ACCESS_TOKEN } = process.env;

module.exports = {
    siteMetadata: {
        siteUrl: `https://mharmony.io`,
        title: `mharmony.io`,
        description: `Personal website for MHarmony`,
        author: `MHarmony`
    },

    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: SPACE_ID,
                accessToken: ACCESS_TOKEN
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `mharmony.io`,
                short_name: `mharmony.io`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`
            }
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `tomato`,
                showSpinner: false
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-173971459-1`,
                anonymize: true,
                respectDNT: true,
                cookieDomain: `mharmony.io`
            }
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`
    ]
};
