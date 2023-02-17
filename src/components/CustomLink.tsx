import React from 'react';

const CustomLink = (props:any) => {
    return (
        <a className='link' {...props}>{props.href.substring(1)}</a>
    );
};

export default CustomLink;