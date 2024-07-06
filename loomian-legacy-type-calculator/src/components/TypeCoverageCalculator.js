import React, { useState } from 'react';
import typeChart from '../typechart';
import '../App.css';

const allTypes = [
    'None', 'Fire', 'Water', 'Plant', 'Light', 'Dark', 'Ice', 'Electric',
    'Air', 'Bug', 'Earth', 'Toxic', 'Metal', 'Ancient', 'Spirit', 'Brawler',
    'Mind', 'Simple'
];

const loomiansList = [
    { name: 'Embit', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/embit.png') },
    { name: 'Rabburn', primaryType: 'Fire', secondaryType: 'None', icon: require('../assets/icons/rabburn.png') },
    { name: 'Searknight', primaryType: 'Fire', secondaryType: 'Metal', icon: require('../assets/icons/searknight.png') },
    { name: 'Dripple', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/dripple.png') },
    { name: 'Reptide', primaryType: 'Water', secondaryType: 'None', icon: require('../assets/icons/reptide.png') },
    { name: 'Luminami', primaryType: 'Water', secondaryType: 'Light', icon: require('../assets/icons/luminami.png') },
    { name: 'Fevine', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/fevine.png') },
    { name: 'Felver', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/felver.png') },
    { name: 'Tahtab', primaryType: 'Plant', secondaryType: 'Brawler', icon: require('../assets/icons/tahtab.png') },
    { name: 'Eaglit', primaryType: 'Light', secondaryType: 'None', icon: require('../assets/icons/eaglit.png') },
    { name: 'Torprey', primaryType: 'Light', secondaryType: 'None', icon: require('../assets/icons/torprey.png') },
    { name: 'Falkyrie', primaryType: 'Light', secondaryType: 'Metal', icon: require('../assets/icons/falkyrie.png') },
    { name: 'Vambat', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/vambat.png') },
    { name: 'Dimpire', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/dimpire.png') },
    { name: 'Vesperatu', primaryType: 'Dark', secondaryType: 'Spirit', icon: require('../assets/icons/vesperatu.png') },
    { name: 'Snocub', primaryType: 'Ice', secondaryType: 'None', icon: require('../assets/icons/snocub.png') },
    { name: 'Snowki', primaryType: 'Ice', secondaryType: 'None', icon: require('../assets/icons/snowki.png') },
    { name: 'Himbrr', primaryType: 'Ice', secondaryType: 'Earth', icon: require('../assets/icons/himbrr.png') },
    { name: 'Weevolt', primaryType: 'Electric', secondaryType: 'None', icon: require('../assets/icons/weevolt.png') },
    { name: 'Stozap', primaryType: 'Electric', secondaryType: 'None', icon: require('../assets/icons/stozap.png') },
    { name: 'Zuelong', primaryType: 'Electric', secondaryType: 'Ancient', icon: require('../assets/icons/zuelong.png') },
    { name: 'Twilat', primaryType: 'Simple', secondaryType: 'None', icon: require('../assets/icons/twilat.png') },
    { name: 'Umbrat', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/umbrat.png') },
    { name: 'Luxoar', primaryType: 'Light', secondaryType: 'None', icon: require('../assets/icons/luxoar.png') },
    { name: 'Tiklipse', primaryType: 'Light', secondaryType: 'Dark', icon: require('../assets/icons/tiklipse.png') },
    { name: 'Cathorn', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/cathorn.png') },
    { name: 'Propae', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/propae.png') },
    { name: 'Cynamoth', primaryType: 'Bug', secondaryType: 'Air', icon: require('../assets/icons/cynamoth.png') },
    { name: 'Sumobito', primaryType: 'Bug', secondaryType: 'Brawler', icon: require('../assets/icons/sumobito.png') },
    { name: 'Twittle', primaryType: 'Air', secondaryType: 'None', icon: require('../assets/icons/twittle.png') },
    { name: 'Paratweet', primaryType: 'Air', secondaryType: 'None', icon: require('../assets/icons/paratweet.png') },
    { name: 'Avitross', primaryType: 'Air', secondaryType: 'None', icon: require('../assets/icons/avitross.png') },
    { name: 'Pyder', primaryType: 'Bug', secondaryType: 'Toxic', icon: require('../assets/icons/pyder.png') },
    { name: 'Swolder', primaryType: 'Bug', secondaryType: 'Toxic', icon: require('../assets/icons/swolder.png') },
    { name: 'Antsee', primaryType: 'Bug', secondaryType: 'Plant', icon: require('../assets/icons/antsee.png') },
    { name: 'Florant', primaryType: 'Bug', secondaryType: 'Plant', icon: require('../assets/icons/florant.png') },
    { name: 'Grubby', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/grubby.png') },
    { name: 'Coonucopia', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/coonucopia.png') },
    { name: 'Terrafly', primaryType: 'Bug', secondaryType: 'Toxic', icon: require('../assets/icons/terrafly.png') },
    { name: 'Terraclaw', primaryType: 'Bug', secondaryType: 'None', icon: require('../assets/icons/terraclaw.png') },
    { name: 'Kleptyke', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/kleptyke.png') },
    { name: 'Ragoon', primaryType: 'Dark', secondaryType: 'None', icon: require('../assets/icons/ragoon.png') },
    { name: 'Babore', primaryType: 'Earth', secondaryType: 'None', icon: require('../assets/icons/babore.png') },
    { name: 'Boarrok', primaryType: 'Earth', secondaryType: 'None', icon: require('../assets/icons/boarrok.png') },
    { name: 'Geklow', primaryType: 'Electric', secondaryType: 'Light', icon: require('../assets/icons/geklow.png') },
    { name: 'Eleguana', primaryType: 'Electric', secondaryType: 'Light', icon: require('../assets/icons/eleguana.png') },
    { name: 'Slugling', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/slugling.png') },
    { name: 'Escargrow', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/escargrow.png') },
    { name: 'Gastroak', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/gastroak.png') },
    { name: 'Kabunga', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/kabunga.png') },
    { name: 'Kabunga-Halloween', primaryType: 'Plant', secondaryType: 'Mind', icon: require('../assets/icons/kabunga-halloween.png') },
    { name: 'Wiki-Wiki', primaryType: 'Plant', secondaryType: 'None', icon: require('../assets/icons/wiki-wiki.png') },
    { name: 'Chartiki', primaryType: 'Plant', secondaryType: 'Fire', icon: require('../assets/icons/chartiki.png') },
    { name: 'Waka-Laka', primaryType: 'Plant', secondaryType: 'Mind', icon: require('../assets/icons/waka-laka.png') },

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

    const handleTypeChange = (index, value) => {
        const updatedTypes = selectedTypes.map((type, i) =>
            i === index ? value : type
        );
        setSelectedTypes(updatedTypes);
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

        loomiansList.forEach(loomian => {
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
    };

    return (
        <div className="App">
            <h1>Loomian Legacy Type Coverage Calculator</h1>
            <p>ONLY HAS LOOMIANS #1-#53 ATM. ONLY HERE FOR TESTING PURPOSES.</p>
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
