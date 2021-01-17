import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/contact';
import Banner from '../components/banner';

export default function IndexPage({ data }) {
    return (
        <Layout header='home'>
            <SEO
                title={data.contentfulAboutMe.designation}
                keyworks={[
                    `mharmony.io`,
                    `Software Developer`,
                    `mharmony`,
                    `mharm0ny`,
                    `Michael Harmon`,
                    `Michael`,
                    `Harmon`,
                    `Developer`
                ]}
            />

            <Banner data={data.contentfulAboutMe} />

            {data.contentfulSiteInformation.menus
                .filter(item => item === 'Contact')
                .map(() => {
                    return (
                        <Contact
                            key='Contact'
                            formId={data.contentfulAboutMe.formspreeFormId}
                        />
                    );
                })}
        </Layout>
    );
}

export const pageQuery = graphql`
    query AboutQuery {
        contentfulAboutMe {
            name
            designation
            github
            email
            id
            linkedin
            twitter
            formspreeFormId
            description {
                childMarkdownRemark {
                    html
                }
            }
            bannerImage {
                fluid(maxWidth: 1500) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                }
            }
            bannerList
        }
        contentfulSiteInformation {
            menus
        }
    }
`;
