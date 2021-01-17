import React from 'react';

export default function Footer(props) {
    return (
        <div className='site-footer' id='footer'>
            <div className='container'>
                <span>{props.copyright}</span>
            </div>
        </div>
    );
}
