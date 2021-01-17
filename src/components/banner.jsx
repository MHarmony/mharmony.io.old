import React from 'react';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Banner(props) {
    const { data } = props;
    return (
        <div className='banner'>
            <Img
                fluid={data.bannerImage.fluid}
                objectFit='cover'
                objectPosition='50% 50%'
            />

            <div className='container'>
                <div className='banner-details'>
                    <span>Hello...</span>
                    <h1>I&#39;m {data.designation}</h1>
                    <ul className='sub-data'>
                        {data.bannerList.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </ul>
                    <ul className='social'>
                        <li>
                            <a
                                href={data.github}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                        </li>

                        <li>
                            <a
                                href={data.linkedin}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </a>
                        </li>

                        <li>
                            <a
                                href={data.twitter}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
