import React from 'react';
import { typeAttributes } from './colors';

const TypeBadge = ({ type, text }) => {
    const { color, textColor, icon } = typeAttributes[type] || { color: 'black', textColor: 'white', icon: '' };

    return (
        <span
            style={{
                backgroundColor: color,
                color: textColor,
                padding: '2px 8px',
                borderRadius: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                margin: '2px',
            }}
        >
            {icon && <img src={icon} alt={type} style={{ width: '16px', height: '16px', marginRight: '4px' }} />}
            {text || type} 
        </span>
    );
};

export default TypeBadge;
