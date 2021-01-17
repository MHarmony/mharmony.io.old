import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header';
import Footer from './footer';
import '../styles/style.scss';

library.add(fab);

export default function Layout({ children, header }) {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            contentfulSiteInformation {
                siteName
                copyright
                logo {
                    file {
                        url
                    }
                }
                menus
            }
        }
    `);

    return (
        <>
            <Header
                data={data.contentfulSiteInformation}
                siteTitle={data.contentfulSiteInformation.siteName}
                header={header}
            />
            <div>
                <main id='home'>{children}</main>
            </div>
            <Footer copyright={data.contentfulSiteInformation.copyright} />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
