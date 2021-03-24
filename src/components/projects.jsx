import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Projects(props) {
    const { data } = props;

    return (
        <div className='project section' id='Projects'>
            <div className='container'>
                <div className='section-head'>
                    <h2 className='text-center'>Projects</h2>
                </div>

                <ul className='project-list'>
                    {data.edges.map((item, index) => {
                        return (
                            <li key={index} className='item'>
                                <div className='inner'>
                                    <a href={item.node.url}>
                                        <GatsbyImage
                                            image={getImage(item.node.image)}
                                            alt={item.node.projectName}
                                        />
                                        <span className='name'>
                                            {item.node.projectName}
                                        </span>
                                    </a>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
