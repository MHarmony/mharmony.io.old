import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/contact';
import Banner from '../components/banner';
import Projects from '../components/projects';

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
                .filter(item => item === 'Projects')
                .map(t => {
                    return (
                        <Projects
                            key='Projects'
                            data={data.allContentfulProjects}></Projects>
                    );
                })}

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
                gatsbyImageData(placeholder: BLURRED)
            }
            bannerList
        }
        contentfulSiteInformation {
            menus
        }
        allContentfulProjects {
            edges {
                node {
                    projectName
                    url
                    image {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
            }
        }
    }
`;
