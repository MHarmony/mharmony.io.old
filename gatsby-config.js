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
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `mharmony.io`,
                short_name: `mharmony.io`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`,
                icon_options: {
                    purpose: `any maskable`
                }
            }
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `tomato`,
                showSpinner: false
            }
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                allPageHeaders: [
                    'Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
                    "Content-Security-Policy: default-src 'self'; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https://images.ctfassets.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline'; report-uri https://mharmony.report-uri.com/r/d/csp/enforce",
                    'Expect-CT: enforce, max-age=43200, report-uri="https://mharmony.report-uri.com/r/d/ct/enforce"',
                    'Report-To: {"group":"default","max_age":31536000,"endpoints":[{"url":"https://mharmony.report-uri.com/a/d/g"}],"include_subdomains":true}',
                    'NEL: {"report_to":"default","max_age":31536000,"include_subdomains":true}'
                ]
            }
        },
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`
    ]
};
