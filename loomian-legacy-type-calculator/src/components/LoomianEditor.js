import React, { useState, useEffect } from 'react';
import loomiansData from './loomiansData';
import movesData from './movesData';
import itemsData from './itemsData';
import secretAbilityIcon from '../assets/icons/secretability.png';
import '../App.css';

const MAX_UP = 40;
const MAX_TP = 200;
const TOTAL_MAX_TP = 500;

const personalityOptions = [
    "hyper", "brawny", "robust", "smart", "clever", "nimble",
    "dull", "frail", "tender", "clumsy", "foolish", "sluggish", "indifferent"
];

const veryPersonalityOptions = personalityOptions
    .filter(p => p !== "indifferent")
    .map(p => `very ${p}`);

function LoomianEditor({ loomian, onSave }) {
    const [attributes, setAttributes] = useState(loomian.attributes || { tps: {}, ups: {}, level: 50, personality: {} });
    const [availableMoves, setAvailableMoves] = useState([]);
    const [remainingTP, setRemainingTP] = useState(TOTAL_MAX_TP);
    const [statsData, setStatsData] = useState({});
    const [abilityOptions, setAbilityOptions] = useState([]);
    const [genderOptions, setGenderOptions] = useState([]);
    const [requiredItem, setRequiredItem] = useState('');

    useEffect(() => {
        const loomianData = loomiansData.find((l) => l.name === loomian.name);
    
        if (loomianData) {
            const sortedMoves = loomianData.moves.sort();
            setAvailableMoves(sortedMoves);
            setStatsData(loomianData.stats);
    
            const abilitiesWithSecret = loomianData.secretAbility
                ? loomianData.abilities.concat(loomianData.secretAbility)
                : loomianData.abilities;
    
            setAbilityOptions(abilitiesWithSecret);
            setGenderOptions(loomianData.gender || []);
            setRequiredItem(loomianData.requiredItem || '');
    
            if (abilitiesWithSecret.length === 1 && !attributes.ability) {
                const [onlyAbility] = abilitiesWithSecret;
                const updatedAttributes = { ...attributes, ability: onlyAbility };
                setAttributes(updatedAttributes);
                onSave(updatedAttributes);
            }
        }
    }, [loomian.name, attributes, onSave]);

    useEffect(() => {
        const totalTP = Object.values(attributes.tps).reduce((a, b) => a + b, 0);
        setRemainingTP(TOTAL_MAX_TP - totalTP);
    }, [attributes.tps]);

    const handleAttributeChange = (attribute, value) => {
        const updatedAttributes = { ...attributes, [attribute]: value };
        setAttributes(updatedAttributes);
        onSave(updatedAttributes);
    };

    const handlePersonalityChange = (type, value) => {
        const updatedPersonality = {
            ...attributes.personality,
            [type]: value,
        };
        const updatedAttributes = { ...attributes, personality: updatedPersonality };
        setAttributes(updatedAttributes);
        onSave(updatedAttributes); 
    };

    const handleMoveChange = (index, value) => {
        const updatedMoves = attributes.moves.map((move, i) => (i === index ? value : move));
        const updatedAttributes = { ...attributes, moves: updatedMoves };
        setAttributes(updatedAttributes);
        onSave(updatedAttributes); 
    };

    const handleTPChange = (stat, value) => {
        const newValue = Math.min(MAX_TP, Math.max(0, parseInt(value, 10)));
        const updatedAttributes = { ...attributes };
        const totalTP = Object.values(updatedAttributes.tps).reduce((a, b) => a + b, 0) - (updatedAttributes.tps[stat] || 0) + newValue;

        if (totalTP <= TOTAL_MAX_TP) {
            updatedAttributes.tps = { ...updatedAttributes.tps, [stat]: newValue };
            setAttributes(updatedAttributes);
            onSave(updatedAttributes); 
        }
    };

    const handleUPChange = (stat, value) => {
        const newValue = parseInt(value, 10);
        if (!isNaN(newValue)) {
            const updatedAttributes = {
                ...attributes,
                ups: { ...attributes.ups, [stat]: Math.min(MAX_UP, Math.max(0, newValue)) },
            };
            setAttributes(updatedAttributes);
            onSave(updatedAttributes); 
        }
    };

    const genderIcon = {
        Male: '♂️',
        Female: '♀️',
        Ungendered: '⚲',
    };

    const calculateStat = (baseStat, statType) => {
        const level = attributes.level || 50;
        const statUp = attributes.ups[statType] || 0;
        const statTp = attributes.tps[statType] || 0;
    
        let multiplier = 1;
    
        const personalityBoosts = {
            energy: { "hyper": 1.1, "dull": 0.9, "very hyper": 1.2, "very dull": 0.8 },
            attack: { "brawny": 1.1, "frail": 0.9, "very brawny": 1.2, "very frail": 0.8 },
            defense: { "robust": 1.1, "tender": 0.9, "very robust": 1.2, "very tender": 0.8 },
            rattack: { "smart": 1.1, "clumsy": 0.9, "very smart": 1.2, "very clumsy": 0.8 },
            rdefense: { "clever": 1.1, "foolish": 0.9, "very clever": 1.2, "very foolish": 0.8 },
            speed: { "nimble": 1.1, "sluggish": 0.9, "very nimble": 1.2, "very sluggish": 0.8 }
        };
    
        if (personalityBoosts[statType]) {
            const primary = attributes.personality.primary;
            const secondary = attributes.personality.secondary;
            const tertiary = attributes.personality.tertiary;
    
            [primary, secondary, tertiary].forEach(personality => {
                if (personality && personalityBoosts[statType][personality]) {
                    multiplier *= personalityBoosts[statType][personality];
                }
            });
        }
    
        let statValue;
        if (statType === 'hp') {
            statValue = ((2 * baseStat + statUp + statTp / 4) * level) / 100 + level + 10;
        } else if (statType === 'energy') {
            statValue = ((Math.floor(2 * baseStat + statUp + statTp / 4) * level) / 65) + 80;
        } else {
            statValue = (((2 * baseStat + statUp + statTp / 4) * level) / 100) + 5;
        }
    
        statValue = Math.floor(statValue) * multiplier;

        if (statType === 'rattack' && attributes.ability === 'Festive Spirit') {
            const energyValue = calculateStat(statsData.energy, 'energy');
            return energyValue;
        }
    
        if (baseStat === 0) {
            return 0;
        }

        return Math.floor(statValue);
    };
    

    const getMoveData = (moveName) => {
        return movesData.find((move) => move.name === moveName) || {};
    };
    
    return (
        <div className="loomian-editor">
            <div className="input-group">
            <label>Ability: </label>
            <select
                value={attributes.ability}
                onChange={(e) => handleAttributeChange('ability', e.target.value)}
                disabled={abilityOptions.length === 1} 
                >
            <option value="">--Select Ability--</option>
                {abilityOptions.map((ability, i) => (
                    <option key={i} value={ability}>{ability}</option>
                 ))}
            </select>
            {attributes.ability && loomiansData.secretAbility === attributes.ability && (
                <img
                    src={secretAbilityIcon}
                    alt="Secret Ability"
                    className="secret-ability-icon"
                />
            )}
        </div>

            <div className="input-group">
                <label>Level: </label>
                <input
                    type="number"
                    value={attributes.level}
                    onChange={(e) => handleAttributeChange('level', Math.max(1, Math.min(100, parseInt(e.target.value, 10))))}
                    min="1"
                    max="100"
                />
            </div>
            <div className="input-group">
                <label>Item: </label>
                <select
                    value={attributes.item}
                    onChange={(e) => handleAttributeChange('item', e.target.value)}
                    disabled={!!requiredItem}
                >
                    {requiredItem ? (
                        <option value={requiredItem}>{requiredItem}</option>
                    ) : (
                        <>
                            <option value="">--Select Item--</option>
                            {itemsData.map((item, i) => (
                                <option key={i} value={item.name}>{item.name}</option>
                            ))}
                        </>
                    )}
                </select>
                {attributes.item && (
                    <img
                        src={itemsData.find((item) => item.name === attributes.item).icon}
                        alt={attributes.item}
                        className="item-icon"
                    />
                )}
                {requiredItem && (
            <img 
                src={itemsData.find(item => item.name === requiredItem)?.icon} 
                alt={requiredItem} 
                style={{ width: '24px', height: '24px' }} 
            />
        )}
            </div>
            <div className="input-group">
                <label>Gender: </label>
                <select value={attributes.gender || ''} onChange={(e) => handleAttributeChange('gender', e.target.value)}>
                    <option value="">--Select Gender--</option>
                    {genderOptions.map((gender, i) => (
                        <option key={i} value={gender}>{gender}</option>
                    ))}
                </select>
                {attributes.gender && (
                    <span className={`gender-icon ${attributes.gender.toLowerCase()}`}>
                        {genderIcon[attributes.gender]}
                    </span>
                )}
            </div>
            <div className="input-group-moves">
                <label>Moves: </label>
                {Array(4).fill().map((_, index) => {
                    const moveData = getMoveData(attributes.moves[index] || '');
                    return (
                        <div key={index}>
                            <select
                                value={attributes.moves[index] || ''}
                                onChange={(e) => handleMoveChange(index, e.target.value)}
                            >
                                <option value="">--Select Move--</option>
                                {availableMoves.map((move, i) => (
                                    <option key={i} value={move}>{move}</option>
                                ))}
                            </select>
                            {moveData && attributes.moves[index] && (
                                <div className="move-details">
                                    <span>Power: {moveData.power}</span>
                                    <span>Energy: {moveData.energy}</span>
                                    <span>Accuracy: {moveData.accuracy}</span>
                                    <span>Type: {moveData.type}</span>
                                    <span>Category: {moveData.mr}</span>
                                </div>
                            )}
                        </div>
                    );
                })}
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
                        <div>{calculateStat(statsData[stat], stat)}</div>
                    </div>
                ))}
                <div>Remaining TPs: {remainingTP}</div>
            </div>
            <div className="input-group">
    <label>Personality:</label>
    <select
        value={attributes.personality.primary || ''}
        onChange={(e) => handlePersonalityChange('primary', e.target.value)}
    >
        <option value="">--Select Personality--</option>
        {personalityOptions.map((option, i) => (
            <option key={i} value={option}>{option}</option>
        ))}
    </select>
    <select
        value={attributes.personality.secondary || ''}
        onChange={(e) => handlePersonalityChange('secondary', e.target.value)}
    >
        <option value="">--Select Personality--</option>
        {personalityOptions.map((option, i) => (
            <option key={i} value={option}>{option}</option>
        ))}
    </select>
    <select
        value={attributes.personality.tertiary || ''}
        onChange={(e) => handlePersonalityChange('tertiary', e.target.value)}
    >
        <option value="">--Select Very Personality--</option>
        {veryPersonalityOptions.map((option, i) => (
            <option key={i} value={option}>{option}</option>
        ))}
    </select>
</div>

        </div>
    );
}

export default LoomianEditor;
