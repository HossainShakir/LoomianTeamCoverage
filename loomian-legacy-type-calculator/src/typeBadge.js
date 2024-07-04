// src/TypeBadge.js
import React from 'react';
import { typeAttributes } from './colors';

const TypeBadge = ({ type, text }) => {
    const { color, textColor, icon } = typeAttributes[type] || { color: 'black', textColor: 'white', icon: '' };
    const iconHTML = icon ? `<img src="${icon}" alt="${type}" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 4px;">` : '';

    return (
        <span
            style={{
                backgroundColor: color,
                color: textColor,
                padding: '2px 8px',
                borderRadius: '12px',
                display: 'inline-block',
                margin: '2px',
            }}
            dangerouslySetInnerHTML={{ __html: `${iconHTML}${text}` }}
        />
    );
};

export default TypeBadge;
