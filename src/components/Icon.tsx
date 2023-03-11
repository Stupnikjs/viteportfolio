import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface props {
    icon: IconDefinition, 
    size: string, 
}

const Icon = ({icon, size}:props) => {
    return (
        <div style={{fontSize: size}}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </div>
    );
};

export default Icon;