import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Banner(props) {
    const { data } = props;
    const image = getImage(data.bannerImage);

    return (
        <div className='banner'>
            <GatsbyImage image={image} alt={data.name} />

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
                                rel='noopener noreferrer'
                                aria-label='GitHub'>
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                        </li>

                        <li>
                            <a
                                href={data.linkedin}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='LinkedIn'>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
