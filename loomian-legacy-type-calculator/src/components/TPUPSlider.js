import React from 'react';
import './TPUPSlider.css';

const TPUPSlider = ({ label, value, max, onChange, upValue }) => {
    const getBarColor = (value) => {
        if (value > 150) return 'green';
        if (value > 100) return 'yellow';
        return 'red';
    };

    const barStyle = {
        width: `${(value / max) * 100}%`,
        backgroundColor: getBarColor(value),
    };

    return (
        <div className="tp-up-slider">
            <label>{label}</label>
            <div className="stats-bar">
                <span className="stat-value">{upValue}</span>
                <div className="bar-container">
                    <div className="bar" style={barStyle}></div>
                </div>
                <input
                    type="range"
                    min="0"
                    max={max}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                />
                <input
                    type="number"
                    min="0"
                    max={max}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                />
            </div>
        </div>
    );
};

export default TPUPSlider;
