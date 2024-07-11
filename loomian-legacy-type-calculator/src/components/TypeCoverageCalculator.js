import React, { useState } from 'react';
import { typeChart, specialTypeCharts } from '../typechart';
import loomiansData from './loomiansData'; // Import the centralized loomians data
import '../App.css';

const allTypes = [
    'None', 'Fire', 'Water', 'Plant', 'Light', 'Dark', 'Ice', 'Electric',
    'Air', 'Bug', 'Earth', 'Toxic', 'Metal', 'Ancient', 'Spirit', 'Brawler',
    'Mind', 'Simple'
];

function TypeCoverageCalculator() {
    const [selectedTypes, setSelectedTypes] = useState(Array(4).fill('None'));
    const [coverageResults, setCoverageResults] = useState({
        superEffective: [],
        normalEffectiveness: [],
        notVeryEffective: [],
        noEffect: []
    });
    const [error, setError] = useState('');
    const [excludeParentheses, setExcludeParentheses] = useState(false);

    const handleTypeChange = (index, value) => {
        const updatedTypes = selectedTypes.map((type, i) =>
            i === index ? value : type
        );
        setSelectedTypes(updatedTypes);
    };

    const handleCheckboxChange = (e) => {
        setExcludeParentheses(e.target.checked);
    };

    const calculateCoverage = () => {
        const selectedTypesFiltered = selectedTypes.filter(type => type !== 'None');

        if (selectedTypesFiltered.length === 0) {
            setError('Please select at least one type.');
            setCoverageResults({
                superEffective: [],
                normalEffectiveness: [],
                notVeryEffective: [],
                noEffect: []
            });
            return;
        }

        setError('');
        const results = {
            superEffective: [],
            normalEffectiveness: [],
            notVeryEffective: [],
            noEffect: []
        };

        loomiansData.forEach(loomian => {
            if (excludeParentheses && loomian.name.includes('(')) {
                return;
            }

            let combinedEffects = {};

            if (loomian.primaryType !== 'None') {
                const primaryWeaknesses = typeChart[loomian.primaryType] || {};
                for (const [attackType, effectiveness] of Object.entries(primaryWeaknesses)) {
                    combinedEffects[attackType] = effectiveness;
                }
            }

            if (loomian.secondaryType !== 'None') {
                const secondaryWeaknesses = typeChart[loomian.secondaryType] || {};
                for (const [attackType, effectiveness] of Object.entries(secondaryWeaknesses)) {
                    if (combinedEffects[attackType] !== undefined) {
                        combinedEffects[attackType] *= effectiveness;
                    } else {
                        combinedEffects[attackType] = effectiveness;
                    }
                }
            }

            if (loomian.specialTypeChart && specialTypeCharts[loomian.specialTypeChart]) {
                const specialWeaknesses = specialTypeCharts[loomian.specialTypeChart];
                for (const [attackType, effectiveness] of Object.entries(specialWeaknesses)) {
                    if (combinedEffects[attackType] !== undefined) {
                        combinedEffects[attackType] *= effectiveness;
                    } else {
                        combinedEffects[attackType] = effectiveness;
                    }
                }
            }

            const isSuperEffective = selectedTypesFiltered.some(type => combinedEffects[type] > 1);
            const isNormalEffectiveness = selectedTypesFiltered.some(type => combinedEffects[type] === 1 || combinedEffects[type] === undefined);
            const isNotVeryEffective = selectedTypesFiltered.some(type => combinedEffects[type] < 1 && combinedEffects[type] > 0);
            const isImmune = selectedTypesFiltered.every(type => combinedEffects[type] === 0);

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
        setError('');
        setExcludeParentheses(false);
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
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    id="exclude-parentheses"
                    checked={excludeParentheses}
                    onChange={handleCheckboxChange}
                    className="checkbox-input"
                />
                <label htmlFor="exclude-parentheses" className="checkbox-label">Exclude Abilities</label>
            </div>
            <button onClick={calculateCoverage}>Calculate Coverage</button>
            <button onClick={resetCalculator}>Reset</button>
            {error && <div className="error">{error}</div>}
            <div className="coverage-results">
                <div className="coverage-category">
                    <h2>Super Effective ({coverageResults.superEffective.length})</h2>
                    {coverageResults.superEffective.map(loomian => (
                        <div key={loomian.name} className="loomian">
                            <img src={loomian.icon} alt={loomian.name} className="loomian-icon" />
                            <span>{loomian.name}</span>
                        </div>
                    ))}
                </div>
                <div className="coverage-category">
                    <h2>Normal Effectiveness ({coverageResults.normalEffectiveness.length})</h2>
                    {coverageResults.normalEffectiveness.map(loomian => (
                        <div key={loomian.name} className="loomian">
                            <img src={loomian.icon} alt={loomian.name} className="loomian-icon" />
                            <span>{loomian.name}</span>
                        </div>
                    ))}
                </div>
                <div className="coverage-category">
                    <h2>Not Very Effective ({coverageResults.notVeryEffective.length})</h2>
                    {coverageResults.notVeryEffective.map(loomian => (
                        <div key={loomian.name} className="loomian">
                            <img src={loomian.icon} alt={loomian.name} className="loomian-icon" />
                            <span>{loomian.name}</span>
                        </div>
                    ))}
                </div>
                <div className="coverage-category">
                    <h2>No Effect ({coverageResults.noEffect.length})</h2>
                    {coverageResults.noEffect.map(loomian => (
                        <div key={loomian.name} className="loomian">
                            <img src={loomian.icon} alt={loomian.name} className="loomian-icon" />
                            <span>{loomian.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="watermark">
                <a href="https://www.youtube.com/@SergeantShaky" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="youtube-icon" />
                </a>
                <span>Sergeant Shaky</span>
            </div>
        </div>
    );
}

export default TypeCoverageCalculator;
