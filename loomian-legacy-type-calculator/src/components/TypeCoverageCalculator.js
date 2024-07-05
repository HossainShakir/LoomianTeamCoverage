import React, { useState } from 'react';
import typeChart from '../typechart';
import TypeBadge from '../typeBadge';
import '../App.css';

const allTypes = [
    'None', 'Fire', 'Water', 'Plant', 'Light', 'Dark', 'Ice', 'Electric',
    'Air', 'Bug', 'Earth', 'Toxic', 'Metal', 'Ancient', 'Spirit', 'Brawler',
    'Mind', 'Simple'
];

// Placeholder for loomians
const loomiansList = [{ name: 'Searknight', primaryType: 'Fire', secondaryType: 'Metal' },
    { name: 'Luminami', primaryType: 'Water', secondaryType: 'Light' },
    { name: 'Tahtab', primaryType: 'Plant', secondaryType: 'Brawler' },
    { name: 'Falkyrie', primaryType: 'Light', secondaryType: 'Metal' },
    { name: 'Zuelong', primaryType: 'Electric', secondaryType: 'Ancient' },
    { name: 'Vesperatu', primaryType: 'Dark', secondaryType: 'Spirit' },];
    
function TypeCoverageCalculator() {
    const [selectedTypes, setSelectedTypes] = useState(Array(4).fill('None'));
    const [coverageResults, setCoverageResults] = useState({
        superEffective: [],
        normalEffectiveness: [],
        notVeryEffective: [],
        noEffect: []
    });

    const handleTypeChange = (index, value) => {
        const updatedTypes = selectedTypes.map((type, i) =>
            i === index ? value : type
        );
        setSelectedTypes(updatedTypes);
    };

    const calculateCoverage = () => {
        const results = {
            superEffective: [],
            normalEffectiveness: [],
            notVeryEffective: [],
            noEffect: []
        };

        loomiansList.forEach(loomian => {
            let combinedEffects = {};

            [loomian.primaryType, loomian.secondaryType].forEach(type => {
                if (type !== 'None') {
                    const weaknesses = typeChart[type];
                    for (const [attackType, effectiveness] of Object.entries(weaknesses)) {
                        if (!combinedEffects[attackType]) {
                            combinedEffects[attackType] = effectiveness;
                        } else {
                            combinedEffects[attackType] *= effectiveness;
                        }
                    }
                }
            });

            const isSuperEffective = selectedTypes.some(type => combinedEffects[type] > 1);
            const isNormalEffectiveness = selectedTypes.some(type => combinedEffects[type] === 1 || combinedEffects[type] === undefined);
            const isNotVeryEffective = selectedTypes.some(type => combinedEffects[type] < 1 && combinedEffects[type] > 0);
            const isImmune = selectedTypes.every(type => combinedEffects[type] === 0);

            if (isImmune) {
                results.noEffect.push(loomian);
            } else if (isSuperEffective) {
                results.superEffective.push(loomian);
            } else if (isNormalEffectiveness) {
                results.normalEffectiveness.push(loomian);
            } else if (isNotVeryEffective) {
                results.notVeryEffective.push(loomian);
            }
        });

        setCoverageResults(results);
    };

    const resetCalculator = () => {
        setSelectedTypes(Array(4).fill('None'));
        setCoverageResults({
            superEffective: [],
            normalEffectiveness: [],
            notVeryEffective: [],
            noEffect: []
        });
    };

    return (
        <div className="App">
            <h1>Loomian Legacy Type Coverage Calculator</h1>
            {selectedTypes.map((type, index) => (
                <div key={index} className="type-selector">
                    <label htmlFor={`type-${index}`}>Select Type {index + 1}:</label>
                    <select
                        id={`type-${index}`}
                        value={type}
                        onChange={(e) => handleTypeChange(index, e.target.value)}
                    >
                        {allTypes.map((typeOption) => (
                            <option key={typeOption} value={typeOption}>
                                {typeOption}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
            <button onClick={calculateCoverage}>Calculate Coverage</button>
            <button onClick={resetCalculator}>Reset</button>
            <div className="coverage-results">
                <h2>Coverage Results:</h2>
                <div>
                    <h3>Super Effective:</h3>
                    {coverageResults.superEffective.map(loomian => (
                        <div key={loomian.name}>{loomian.name}</div>
                    ))}
                </div>
                <div>
                    <h3>Normal Effectiveness:</h3>
                    {coverageResults.normalEffectiveness.map(loomian => (
                        <div key={loomian.name}>{loomian.name}</div>
                    ))}
                </div>
                <div>
                    <h3>Not Very Effective:</h3>
                    {coverageResults.notVeryEffective.map(loomian => (
                        <div key={loomian.name}>{loomian.name}</div>
                    ))}
                </div>
                <div>
                    <h3>No Effect:</h3>
                    {coverageResults.noEffect.map(loomian => (
                        <div key={loomian.name}>{loomian.name}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TypeCoverageCalculator;
