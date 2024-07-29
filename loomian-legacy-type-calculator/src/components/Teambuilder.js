import React, { useState } from 'react';
import loomiansData from './loomiansData';
import LoomianEditor from './LoomianEditor';
import TypeBadge from '../typeBadge';
import '../App.css';

const MAX_TEAM_SIZE = 7;

function Teambuilder() {
    const [team, setTeam] = useState([]);
    const [selectedLoomian, setSelectedLoomian] = useState('');
    const [expandedIndex, setExpandedIndex] = useState(null);

    const addLoomianToTeam = () => {
        if (selectedLoomian && team.length < MAX_TEAM_SIZE) {
            const loomianData = loomiansData.find((loomian) => loomian.name === selectedLoomian);
            setTeam([
                ...team,
                { 
                    name: selectedLoomian, 
                    attributes: getDefaultAttributes(), 
                    types: { primary: loomianData.primaryType, secondary: loomianData.secondaryType } 
                }
            ]);
            setSelectedLoomian('');
        }
    };

    const updateLoomianAttributes = (index, newAttributes) => {
        const updatedTeam = team.map((loomian, i) => (i === index ? { ...loomian, attributes: newAttributes } : loomian));
        setTeam(updatedTeam);
    };

    const removeLoomianFromTeam = (index) => {
        const updatedTeam = [...team];
        updatedTeam.splice(index, 1);
        setTeam(updatedTeam);
    };

    const getDefaultAttributes = () => ({
        ability: '',
        moves: ['', '', '', ''],
        gender: 'Male',
        ups: { hp: 40, energy: 40, attack: 40, defense: 40, rAttack: 40, rDefense: 40, speed: 40 },
        tps: { hp: 0, energy: 0, attack: 0, defense: 0, rAttack: 0, rDefense: 0, speed: 0 },
        personality: '',
        item: '',
    });

    const handleToggleEditor = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="App">
            <h1>Loomian Legacy Teambuilder</h1>
            <div>
                <label>Select Loomian: </label>
                <select value={selectedLoomian} onChange={(e) => setSelectedLoomian(e.target.value)}>
                    <option value="">--Select Loomian--</option>
                    {loomiansData.map((loomian) => (
                        <option key={loomian.name} value={loomian.name}>{loomian.name}</option>
                    ))}
                </select>
                <button onClick={addLoomianToTeam}>Add Loomian</button>
            </div>
            <div>
                <h2>Team</h2>
                {team.map((loomian, index) => (
                    <div key={index} className="loomian-container">
                        <div className="loomian-header">
                            <img src={loomiansData.find((l) => l.name === loomian.name).icon} alt={loomian.name} />
                            <span>{loomian.name}</span>
                            <div className="type-badges">
                                {loomian.types.primary !== 'None' && <TypeBadge type={loomian.types.primary} />}
                                {loomian.types.secondary !== 'None' && <TypeBadge type={loomian.types.secondary} />}
                            </div>
                            <button onClick={() => handleToggleEditor(index)}>
                                {expandedIndex === index ? 'Collapse' : 'Expand'}
                            </button>
                            <button onClick={() => removeLoomianFromTeam(index)}>Remove</button>
                        </div>
                        {expandedIndex === index && (
                            <LoomianEditor
                                loomian={loomian}
                                onSave={(attributes) => updateLoomianAttributes(index, attributes)}
                            />
                        )}
                    </div>
                ))}
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

export default Teambuilder;
