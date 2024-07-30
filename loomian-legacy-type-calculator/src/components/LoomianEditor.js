import React, { useState, useEffect } from 'react';
import loomiansData from './loomiansData';
import '../App.css';

const MAX_UP = 40;
const MAX_TP = 200;
const TOTAL_MAX_TP = 500;

function LoomianEditor({ loomian, onSave }) {
    const [attributes, setAttributes] = useState(loomian.attributes || { tps: {}, ups: {} });
    const [availableMoves, setAvailableMoves] = useState([]);
    const [remainingTP, setRemainingTP] = useState(TOTAL_MAX_TP);
    const [statsData, setStatsData] = useState({});
    const [abilityOptions, setAbilityOptions] = useState([]);

    useEffect(() => {
        const loomianData = loomiansData.find((l) => l.name === loomian.name);
        
        if (loomianData) {
            const sortedMoves = loomianData.moves.sort();
            setAvailableMoves(sortedMoves);
            setStatsData(loomianData.stats);

            // Initialize attributes with loomian data
            setAttributes((prevAttributes) => ({
                ...prevAttributes,
                ability: loomianData.abilities[0] || '',
                gender: loomianData.gender || '',
                tps: loomianData.tps || {},
                ups: loomianData.ups || {}
            }));

            // Set ability options including secret ability
            const abilitiesWithSecret = loomianData.secretAbility
                ? loomianData.abilities.concat(loomianData.secretAbility)
                : loomianData.abilities;
            setAbilityOptions(abilitiesWithSecret);
        }
    }, [loomian.name]);

    useEffect(() => {
        const totalTP = Object.values(attributes.tps).reduce((a, b) => a + b, 0);
        setRemainingTP(TOTAL_MAX_TP - totalTP);
    }, [attributes.tps]);

    const handleAttributeChange = (attribute, value) => {
        setAttributes((prevAttributes) => ({
            ...prevAttributes,
            [attribute]: value,
        }));
    };

    const handleMoveChange = (index, value) => {
        setAttributes((prevAttributes) => {
            const updatedMoves = prevAttributes.moves.map((move, i) => (i === index ? value : move));
            return { ...prevAttributes, moves: updatedMoves };
        });
    };

    const handleTPChange = (stat, value) => {
        const newValue = Math.min(MAX_TP, Math.max(0, parseInt(value, 10)));
        setAttributes((prevAttributes) => {
            const totalTP = Object.values(prevAttributes.tps).reduce((a, b) => a + b, 0) - (prevAttributes.tps[stat] || 0) + newValue;

            if (totalTP <= TOTAL_MAX_TP) {
                return {
                    ...prevAttributes,
                    tps: { ...prevAttributes.tps, [stat]: newValue },
                };
            }

            return prevAttributes;
        });
    };

    const handleUPChange = (stat, value) => {
        const newValue = parseInt(value, 10);
        if (!isNaN(newValue)) {
            setAttributes((prevAttributes) => ({
                ...prevAttributes,
                ups: { ...prevAttributes.ups, [stat]: Math.min(MAX_UP, Math.max(0, newValue)) },
            }));
        }
    };
    
    return (
        <div className="loomian-editor">
            <div className="input-group">
                <label>Ability: </label>
                <select
                    value={attributes.ability}
                    onChange={(e) => handleAttributeChange('ability', e.target.value)}
                >
                    <option value="">--Select Ability--</option>
                    {abilityOptions.map((ability, i) => (
                        <option key={i} value={ability}>{ability}</option>
                    ))}
                </select>
            </div>
            <div className="input-group">
                <label>Item: </label>
                <input
                    type="text"
                    value={attributes.item}
                    onChange={(e) => handleAttributeChange('item', e.target.value)}
                />
            </div>
            <div>
                <label>Moves:</label>
                {attributes.moves.map((move, index) => (
                    <div key={index} className="input-group">
                        <select value={move} onChange={(e) => handleMoveChange(index, e.target.value)}>
                            <option value="">--Select Move--</option>
                            {availableMoves.map((availableMove, i) => (
                                <option key={i} value={availableMove}>{availableMove}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
            <div className="input-group">
                <label>Gender: </label>
                <select value={attributes.gender} onChange={(e) => handleAttributeChange('gender', e.target.value)}>
                    <option value="">--Select Gender--</option>
                    {(loomian.gender || 'Male/Female').split('/').map((gender, i) => (
                        <option key={i} value={gender.trim()}>{gender.trim()}</option>
                    ))}
                </select>
            </div>
            <div className="stats-container">
                <div className="tp-up-labels">
                    <div className="label">TPs</div>
                    <div className="label">UPs</div>
                </div>
                {Object.keys(statsData).map((stat) => (
                    <div key={stat} className="stat-item">
                        <span>{stat.toUpperCase()}: {statsData[stat]}</span>
                        <input
                            type="number"
                            className="tp-number"
                            value={attributes.tps[stat] || 0}
                            onChange={(e) => handleTPChange(stat, e.target.value)}
                            max={MAX_TP}
                        />
                        <input
                            type="range"
                            className="tp-slider"
                            min="0"
                            max={MAX_TP}
                            value={attributes.tps[stat] || 0}
                            onChange={(e) => handleTPChange(stat, e.target.value)}
                        />
                        <input
                            type="number"
                            className="up-number"
                            value={attributes.ups[stat] !== undefined ? attributes.ups[stat] : 40}
                            onChange={(e) => handleUPChange(stat, e.target.value)}
                            max={MAX_UP}
                        />
                    </div>
                ))}
                <div>Remaining TPs: {remainingTP}</div>
            </div>
            <div className="input-group">
                <label>Personality: </label>
                <input
                    type="text"
                    value={attributes.personality || ''}
                    onChange={(e) => handleAttributeChange('personality', e.target.value)}
                />
            </div>
            <button onClick={() => onSave(attributes)}>Save</button>
        </div>
    );
}

export default LoomianEditor;
