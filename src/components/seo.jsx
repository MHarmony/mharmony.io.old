import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({ description, lang, meta, keywords, title }) {
    const data = useStaticQuery(graphql`
        query DefaultSEOQuery {
            contentfulSiteInformation {
                siteName
                siteDescription
                twitterHandle
            }
        }
    `);

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={`%s | ${data.contentfulSiteInformation.siteName}`}
            meta={[
                {
                    name: `description`,
                    content: data.contentfulSiteInformation.siteDescription
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: data.contentfulSiteInformation.siteDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: data.contentfulSiteInformation.twiteerHandle
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: data.contentfulSiteInformation.siteDescription
                }
            ]
                .concat(
                    keywords.length > 0
                        ? {
                              name: `keywords`,
                              content: keywords.join(`, `)
                          }
                        : []
                )
                .concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
    keywords: []
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired
};
