import React, { useState, useEffect } from 'react';
import typeChart from '../typechart';
import { specialTypeCharts } from '../typechart.js';
import TypeBadge from '../typeBadge';
import LastUpdated from './lastUpdated';
import '../App.css';

const initialLoomians = Array.from({ length: 7 }, () => ({
    primaryType: 'None',
    secondaryType: 'None',
    ability: 'None',
}));

const allTypes = [
    'None', 'Fire', 'Water', 'Plant', 'Light', 'Dark', 'Ice', 'Electric',
    'Air', 'Bug', 'Earth', 'Toxic', 'Metal', 'Ancient', 'Spirit', 'Brawler',
    'Mind', 'Simple'
];

const abilities = Object.keys(specialTypeCharts);

function TeamTypeCalculator() {
    const [loomians, setLoomians] = useState(initialLoomians);
    const [results, setResults] = useState([]);
    const [teamWeaknesses, setTeamWeaknesses] = useState([]);
    const [teamResistances, setTeamResistances] = useState([]);
    const [unresistedTypes, setUnresistedTypes] = useState(allTypes.slice(1));
    const [recommendations, setRecommendations] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
    };

    const handleTypeChange = (index, type, value) => {
        const updatedLoomians = loomians.map((loomian, i) =>
            i === index ? { ...loomian, [type]: value } : loomian
        );
        setLoomians(updatedLoomians);
    };

    const formatTextWithSpaces = (text) => {
        return text.replace(/([a-z])([A-Z])/g, '$1 $2');
    };    

    const calculateResults = () => {
        const newResults = loomians.map((loomian) => {
            let combinedEffects = {};

            if (loomian.primaryType !== 'None') {
                const primaryWeaknesses = typeChart[loomian.primaryType] || {};
                for (const [type, effectiveness] of Object.entries(primaryWeaknesses)) {
                    combinedEffects[type] = effectiveness;
                }
            }

            if (loomian.secondaryType !== 'None') {
                const secondaryWeaknesses = typeChart[loomian.secondaryType] || {};
                for (const [type, effectiveness] of Object.entries(secondaryWeaknesses)) {
                    if (effectiveness === 0 || combinedEffects[type] === 0) {
                        combinedEffects[type] = 0;
                    } else {
                        combinedEffects[type] = (combinedEffects[type] || 1) * effectiveness;
                    }
                }
            }

            if (loomian.ability !== 'None') {
                const abilityEffects = specialTypeCharts[loomian.ability] || {};
                for (const [type, multiplier] of Object.entries(abilityEffects)) {
                    combinedEffects[type] = (combinedEffects[type] || 1) * multiplier;
                }
            }

            const weaknesses = [];
            const resistances = [];

            for (const [type, effectiveness] of Object.entries(combinedEffects)) {
                if (effectiveness > 1) {
                    weaknesses.push({ type, effectiveness });
                } else if (effectiveness < 1) {
                    resistances.push({ type, effectiveness });
                }
            }

            return { weaknesses, resistances, combinedEffects };
        });

        setResults(newResults);

        const typeCount = {};
        newResults.forEach((result) => {
            for (const [type, effectiveness] of Object.entries(result.combinedEffects)) {
                if (effectiveness > 1) {
                    typeCount[type] = (typeCount[type] || 0) + 1;
                } else if (effectiveness < 1) {
                    typeCount[type] = (typeCount[type] || 0) - 1;
                }
            }
        });

        const teamWeaknessesArray = Object.entries(typeCount)
            .filter(([type, count]) => count > 0)
            .map(([type, count]) => ({ type, count }));

        const teamResistancesArray = Object.entries(typeCount)
            .filter(([type, count]) => count < 0)
            .map(([type, count]) => ({ type, count }));

        setTeamWeaknesses(teamWeaknessesArray);
        setTeamResistances(teamResistancesArray);

        const resistedTypes = {};
        newResults.forEach((result) => {
            for (const [type, effectiveness] of Object.entries(result.combinedEffects)) {
                if (effectiveness < 1) {
                    resistedTypes[type] = true;
                }
            }
        });

        const updatedUnresistedTypes = allTypes.filter((type) => type !== 'None' && !resistedTypes[type]);
        setUnresistedTypes(updatedUnresistedTypes);

        const recommendationsArray = allTypes.slice(1).map((type) => {
            let rating = 0;
            teamWeaknessesArray.forEach(({ type: weaknessType }) => {
                if (typeChart[type][weaknessType] < 1) {
                    rating++;
                }
            });
            return { type, rating };
        }).sort((a, b) => b.rating - a.rating);

        setRecommendations(recommendationsArray);
    };

    const resetCalculator = () => {
        setLoomians(initialLoomians);
        setResults([]);
        setTeamWeaknesses([]);
        setTeamResistances([]);
        setUnresistedTypes(allTypes.slice(1));
        setRecommendations([]);
    };

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <button onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <div className="App">
                <h1>Loomian Legacy Team Type Calculator</h1>
                {loomians.map((loomian, index) => (
                    <div key={index} className={`loomian-container main-team`}>
                        <div className="loomian">
                            <div>
                                <label htmlFor={`primaryType-${index}`}>Primary Type:</label>
                                <select
                                    id={`primaryType-${index}`}
                                    value={loomian.primaryType}
                                    onChange={(e) => handleTypeChange(index, 'primaryType', e.target.value)}
                                >
                                    {allTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor={`secondaryType-${index}`}>Secondary Type:</label>
                                <select
                                    id={`secondaryType-${index}`}
                                    value={loomian.secondaryType}
                                    onChange={(e) => handleTypeChange(index, 'secondaryType', e.target.value)}
                                >
                                    {allTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor={`ability-${index}`}>Ability:</label>
                                <select
                                    id={`ability-${index}`}
                                    value={loomian.ability}
                                    onChange={(e) => handleTypeChange(index, 'ability', e.target.value)}
                                >
                                    <option value="None">None</option>
                                    {abilities.map((ability) => (
                                        <option key={ability} value={ability}>
                                            {formatTextWithSpaces(ability)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="results">
                        <div className="result">
                            <div>Weaknesses:</div>
                            {results[index]?.weaknesses.map(({ type, effectiveness }, i) => (
                                <TypeBadge key={i} type={type} text={`${type}: ${effectiveness}x`} />
                            ))}
                        </div>
                        <div className="result">
                            <div>Resistances:</div>
                            {results[index]?.resistances.map(({ type, effectiveness }, i) => (
                                <TypeBadge key={i} type={type} text={`${type}: ${effectiveness}x`} />
                            ))}
                        </div>
                    </div>
                    </div>
                ))}
                <button onClick={calculateResults}>Calculate Results</button>
                <button onClick={resetCalculator}>Reset</button>
                <div className="team-effects">
                <div className="team-weaknesses">
                    <h2>Team Weaknesses:</h2>
                    {teamWeaknesses.map(({ type, count }) => (
                        <TypeBadge key={type} type={type} text={`${type}: ${count}`} />
                    ))}
                </div>
                <div className="team-resistances">
                    <h2>Team Resistances:</h2>
                    {teamResistances.map(({ type, count }) => (
                        <TypeBadge key={type} type={type} text={`${type}: ${Math.abs(count)}`} />
                    ))}
                </div>
                <div className="unresisted-types">
                    <h2>Unresisted Types:</h2>
                    {unresistedTypes.map((type) => (
                        <TypeBadge key={type} type={type} text={type} />
                    ))}
                </div>
                <div className="recommendations">
                    <h2>Recommended Types:</h2>
                    {recommendations.map(({ type, rating }) => (
                        <TypeBadge key={type} type={type} text={`${type}: ${rating}`} />
                    ))}
                </div>
            </div>
                <div className="watermark">
                <a href="https://www.youtube.com/@SergeantShaky" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="youtube-icon" />
                </a>
                <span>Sergeant Shaky</span>
                </div>
                <LastUpdated />
            </div>
        </div>
    );
}

export default TeamTypeCalculator;
