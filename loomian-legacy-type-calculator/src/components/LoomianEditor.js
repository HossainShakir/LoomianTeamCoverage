import React, { useState, useEffect } from 'react';
import loomiansData from './loomiansData';
import '../App.css';

const MAX_UP = 40;
const MAX_TP = 200;
const TOTAL_MAX_TP = 500;

function LoomianEditor({ loomian, onSave }) {
    const [attributes, setAttributes] = useState(loomian.attributes);
    const [availableMoves, setAvailableMoves] = useState([]);
    const [remainingTP, setRemainingTP] = useState(TOTAL_MAX_TP);

    useEffect(() => {
        const loomianData = loomiansData.find((l) => l.name === loomian.name);
        const sortedMoves = loomianData.moves.sort();
        setAvailableMoves(sortedMoves);
    }, [loomian.name]);

    useEffect(() => {
        const totalTP = Object.values(attributes.tps).reduce((a, b) => a + b, 0);
        setRemainingTP(TOTAL_MAX_TP - totalTP);
    }, [attributes.tps]);

    const handleAttributeChange = (attribute, value) => {
        setAttributes({ ...attributes, [attribute]: value });
    };

    const handleMoveChange = (index, value) => {
        const updatedMoves = attributes.moves.map((move, i) => (i === index ? value : move));
        setAttributes({ ...attributes, moves: updatedMoves });
    };

    const handleUPChange = (stat, value) => {
        setAttributes({
            ...attributes,
            ups: { ...attributes.ups, [stat]: Math.min(MAX_UP, Math.max(0, parseInt(value))) },
        });
    };

    const handleTPChange = (stat, value) => {
        const newValue = Math.min(MAX_TP, Math.max(0, parseInt(value)));
        const totalTP = Object.values(attributes.tps).reduce((a, b) => a + b, 0) - attributes.tps[stat] + newValue;

        if (totalTP <= TOTAL_MAX_TP) {
            setAttributes({
                ...attributes,
                tps: { ...attributes.tps, [stat]: newValue },
            });
        }
    };

    return (
        <div className="loomian-editor">
            <div>
                <label>Ability: </label>
                <input
                    type="text"
                    value={attributes.ability}
                    onChange={(e) => handleAttributeChange('ability', e.target.value)}
                />
            </div>
            <div>
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
                    <div key={index}>
                        <select value={move} onChange={(e) => handleMoveChange(index, e.target.value)}>
                            <option value="">--Select Move--</option>
                            {availableMoves.map((availableMove, i) => (
                                <option key={i} value={availableMove}>{availableMove}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
            <div>
                <label>Gender: </label>
                <select value={attributes.gender} onChange={(e) => handleAttributeChange('gender', e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Ungendered">Ungendered</option>
                </select>
            </div>
            <div>
                <h3>UPs</h3>
                {Object.keys(attributes.ups).map((stat) => (
                    <div key={stat}>
                        <label>{stat.toUpperCase()}: </label>
                        <input
                            type="number"
                            value={attributes.ups[stat]}
                            onChange={(e) => handleUPChange(stat, e.target.value)}
                            max={MAX_UP}
                        />
                    </div>
                ))}
            </div>
            <div>
                <h3>TPs</h3>
                {Object.keys(attributes.tps).map((stat) => (
                    <div key={stat}>
                        <label>{stat.toUpperCase()}: </label>
                        <input
                            type="number"
                            value={attributes.tps[stat]}
                            onChange={(e) => handleTPChange(stat, e.target.value)}
                            max={MAX_TP}
                        />
                    </div>
                ))}
                <div>Remaining TPs: {remainingTP}</div>
            </div>
            <div>
                <label>Personality: </label>
                <input
                    type="text"
                    value={attributes.personality}
                    onChange={(e) => handleAttributeChange('personality', e.target.value)}
                />
            </div>
            <button onClick={() => onSave(attributes)}>Save</button>
        </div>
    );
}

export default LoomianEditor;
