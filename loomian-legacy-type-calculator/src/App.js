// src/App.js
import React, { useState } from 'react';
import typeChart from './typechart';
import './App.css';

const initialLoomians = Array.from({ length: 7 }, () => ({
    primaryType: 'None',
    secondaryType: 'None',
}));

const allTypes = ['None', 'Fire', 'Water', 'Plant', 'Light', 'Dark', 'Ice', 'Electric', 'Air', 'Bug', 'Earth', 'Toxic', 'Metal', 'Ancient', 'Spirit', 'Brawler', 'Mind', 'Simple'];

function App() {
    const [loomians, setLoomians] = useState(initialLoomians);
    const [results, setResults] = useState([]);
    const [teamWeaknesses, setTeamWeaknesses] = useState([]);
    const [teamResistances, setTeamResistances] = useState([]);
    const [unresistedTypes, setUnresistedTypes] = useState(allTypes.slice(1)); // Start with all types except 'None'
    const [recommendations, setRecommendations] = useState([]);

    const handleTypeChange = (index, type, value) => {
        const updatedLoomians = loomians.map((loomian, i) =>
            i === index ? { ...loomian, [type]: value } : loomian
        );
        setLoomians(updatedLoomians);
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
    
            let weaknessesText = 'Weaknesses:<br>';
            let resistancesText = 'Resistances:<br>';
            for (const [type, effectiveness] of Object.entries(combinedEffects)) {
                if (effectiveness > 1) {
                    weaknessesText += `${type}: ${effectiveness}x<br>`;
                } else if (effectiveness < 1) {
                    resistancesText += `${type}: ${effectiveness}x<br>`;
                }
            }
            return { weaknesses: weaknessesText, resistances: resistancesText, combinedEffects };
        });
    
        setResults(newResults);
    
        // Calculate team weaknesses and resistances
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
            .map(([type, count]) => `${type}: ${count}x`);
    
        const teamResistancesArray = Object.entries(typeCount)
            .filter(([type, count]) => count < 0)
            .map(([type, count]) => `${type}: ${count}x`);
    
        setTeamWeaknesses(teamWeaknessesArray);
        setTeamResistances(teamResistancesArray);
    
        // Calculate unresisted types
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
    
        // Calculate recommendations
        const recommendationsArray = allTypes.slice(1).map((type, index) => {
            let rating = 0;
            teamWeaknessesArray.forEach((weakness) => {
                const [weaknessType] = weakness.split(':');
                if (typeChart[type][weaknessType] < 1) {
                    rating++;
                }
            });
            return { type, rating };
        }).sort((a, b) => b.rating - a.rating);
    
        setRecommendations(recommendationsArray);
    };    

    return (
        <div className="App">
            <h1>Loomian Legacy Type Calculator</h1>
            {loomians.map((loomian, index) => (
                <div key={index} className="loomian-container">
                    <div className="loomian">
                        <div>
                            <label htmlFor={`primaryType-${index}`}>Select Primary Type:</label>
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
                            <label htmlFor={`secondaryType-${index}`}>Select Secondary Type:</label>
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
                    </div>
                    <div className="results">
                        <div className="result" dangerouslySetInnerHTML={{ __html: results[index]?.weaknesses }}></div>
                        <div className="result" dangerouslySetInnerHTML={{ __html: results[index]?.resistances }}></div>
                    </div>
                </div>
            ))}
            <button onClick={calculateResults}>Calculate Results</button>
            <div className="team-effects">
                <div className="team-weaknesses">
                    <h2>Team Weaknesses:</h2>
                    {teamWeaknesses.map((type, index) => (
                        <div key={index}>{type}</div>
                    ))}
                </div>
                <div className="team-resistances">
                    <h2>Team Resistances:</h2>
                    {teamResistances.map((type, index) => (
                        <div key={index}>{type}</div>
                    ))}
                </div>
            </div>
            <div className="unresisted-types">
                <h2>Unresisted Types:</h2>
                {unresistedTypes.map((type, index) => (
                    <div key={index}>{type}</div>
                ))}
            </div>
            <div className="recommendations">
                <h2>Recommended Additions:</h2>
                {recommendations.map(({ type, rating }, index) => (
                    <div key={index}>{type}: {rating}</div>
                ))}
            </div>
        </div>
    );
}

export default App;
 