import React, { useState, useEffect } from 'react';
import loomiansData from './loomiansData';
import itemsData from './itemsData';
import LoomianEditor from './LoomianEditor';
import TypeBadge from '../typeBadge';
import LastUpdated from './lastUpdated';
import LoomianDropdown from './LoomianDropdown';
import '../App.css';

const MAX_TEAM_SIZE = 7;

function parseTeamString(teamString) {
    const loomianBlocks = teamString.trim().split(/\n\s*\n/);
  
    return loomianBlocks.map((block) => {
      const lines = block.split('\n').map((line) => line.trim());
      
      const [firstLine, ...rest] = lines;
      const nameMatch = firstLine.match(/^(.+?)\s*@\s*(.*)$/);
  
      let loomianName = '';
      let item = '';
      if (nameMatch) {
        loomianName = nameMatch[1].trim();
        item = nameMatch[2].trim();
      } else {
        loomianName = firstLine; 
      }
  
      const attributes = {
        ability: '',
        gender: '',
        ups: { hp: 40, energy: 40, attack: 40, defense: 40, rattack: 40, rdefense: 40, speed: 40 },
        tps: { hp: 0, energy: 0, attack: 0, defense: 0, rattack: 0, rdefense: 0, speed: 0 },
        personality: {},
        moves: ['', '', '', ''],
        item: item === '--None--' ? '' : item, 
        level: 50
      };
  
      let moveIndex = 0;
  
      for (let line of rest) {
        if (line.startsWith('Ability:')) {
          attributes.ability = line.replace('Ability:', '').trim();
        } else if (line.startsWith('Gender:')) {
          attributes.gender = line.replace('Gender:', '').trim();
        } else if (line.startsWith('TPs:')) {
          const tpsLine = line.replace('TPs:', '').trim();
          const segments = tpsLine.split('/');
          segments.forEach((seg) => {
            const parts = seg.trim().split(' ');
            const value = parseInt(parts[0], 10);
            const stat = (parts[1] || '').toLowerCase();
            if (!isNaN(value) && attributes.tps[stat] !== undefined) {
              attributes.tps[stat] = value;
            }
          });
        } else if (line.startsWith('UPs:')) {
          const upsLine = line.replace('UPs:', '').trim();
          const segments = upsLine.split('/');
          segments.forEach((seg) => {
            const parts = seg.trim().split(' ');
            const value = parseInt(parts[0], 10);
            const stat = (parts[1] || '').toLowerCase();
            if (!isNaN(value) && attributes.ups[stat] !== undefined) {
              attributes.ups[stat] = value;
            }
          });
        } else if (line.startsWith('Personality:')) {
          const persLine = line.replace('Personality:', '').trim();
          const persSplit = persLine.split(',');
          attributes.personality.primary = (persSplit[0] || '').trim() || '';
          attributes.personality.secondary = (persSplit[1] || '').trim() || '';
          attributes.personality.tertiary = (persSplit[2] || '').trim() || '';
        } else if (line.startsWith('- ')) {
          const moveName = line.replace('- ', '').trim();
          if (moveIndex < 4) {
            attributes.moves[moveIndex] = moveName;
            moveIndex++;
          }
        }
      }
  
      const loomianData = loomiansData.find((ld) => ld.name === loomianName);
      
      if (!loomianData) {
        return null;
      }
  
      return {
        name: loomianName,
        attributes,
        types: {
          primary: loomianData.primaryType,
          secondary: loomianData.secondaryType,
        },
      };
    })
    .filter(Boolean);
  }  

function Teambuilder() {
    const [teams, setTeams] = useState([]);
    const [teamName, setTeamName] = useState('');
    const [currentTeam, setCurrentTeam] = useState([]);
    const [selectedLoomian, setSelectedLoomian] = useState('');
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [error, setError] = useState('');
    const [teamToDelete, setTeamToDelete] = useState(null);
    const [message, setMessage] = useState('');
    const [selectedTeamIndex, setSelectedTeamIndex] = useState(null);
    const [showAddTeam, setShowAddTeam] = useState(false);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [showUnsavedChangesDialog, setShowUnsavedChangesDialog] = useState(false);
    const [backActionPending, setBackActionPending] = useState(false);
    const [showImportDialog, setShowImportDialog] = useState(false);
    const [importedTeamText, setImportedTeamText] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setDarkMode(document.documentElement.classList.contains('dark-mode'));
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

    useEffect(() => {
        const savedTeams = JSON.parse(localStorage.getItem('teams')) || [];
        setTeams(savedTeams);
    }, []);

    const addLoomianToTeam = () => {
        if (selectedLoomian && currentTeam.length < MAX_TEAM_SIZE) {
            const loomianData = loomiansData.find((loomian) => loomian.name === selectedLoomian);
            setCurrentTeam([
                ...currentTeam,
                { 
                    name: selectedLoomian, 
                    attributes: getDefaultAttributes(), 
                    types: { primary: loomianData.primaryType, secondary: loomianData.secondaryType } 
                }
            ]);
            setSelectedLoomian('');
            setHasUnsavedChanges(true);
        } else if (currentTeam.length >= MAX_TEAM_SIZE) {
            setError('Cannot add more than 7 Loomians to a team.');
            setTimeout(() => setError(''), 2000);
        }
    };

    const updateLoomianAttributes = (index, newAttributes) => {
        const updatedTeam = currentTeam.map((loomian, i) => (i === index ? { ...loomian, attributes: newAttributes } : loomian));
        setCurrentTeam(updatedTeam);
        setHasUnsavedChanges(true);
    };

    const removeLoomianFromTeam = (index) => {
        const updatedTeam = [...currentTeam];
        updatedTeam.splice(index, 1);
        setCurrentTeam(updatedTeam);
        setHasUnsavedChanges(true);
    };

    const getDefaultAttributes = () => ({
        ability: '',
        level: 50,
        gender: '',
        moves: ['', '', '', ''],
        ups: { hp: 40, energy: 40, attack: 40, defense: 40, rattack: 40, rdefense: 40, speed: 40 },
        tps: { hp: 0, energy: 0, attack: 0, defense: 0, rattack: 0, rdefense: 0, speed: 0 },
        personality: '',
        item: '',
    });

    const handleToggleEditor = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const saveTeam = () => {
        const name = teamName || `Untitled ${teams.filter(team => team.name.startsWith('Untitled')).length + 1}`;
        if (teams.some(team => team.name === name && team.name !== (selectedTeamIndex !== null ? teams[selectedTeamIndex].name : ''))) {
            setError('A team with this name already exists.');
            setTimeout(() => setError(''), 2000);
            return;
        }
        const newTeam = { name, loomians: currentTeam };
        const updatedTeams = selectedTeamIndex !== null
            ? teams.map((team, index) => index === selectedTeamIndex ? newTeam : team)
            : [...teams, newTeam];
        setTeams(updatedTeams);
        localStorage.setItem('teams', JSON.stringify(updatedTeams));
        setMessage('Team saved!');
        setHasUnsavedChanges(false);
        setTimeout(() => setMessage(''), 2000);
    };

    const handleBackToTeams = () => {
        if (hasUnsavedChanges) {
            setShowUnsavedChangesDialog(true);
            setBackActionPending(true);
        } else {
            setShowAddTeam(false);
            setSelectedTeamIndex(null);
        }
    };

    const confirmUnsavedChanges = () => {
        if (backActionPending) {
            setShowAddTeam(false);
            setSelectedTeamIndex(null);
        }
        setShowUnsavedChangesDialog(false);
        setBackActionPending(false);
    };

    const cancelUnsavedChangesDialog = () => {
        setShowUnsavedChangesDialog(false);
        setBackActionPending(false);
    };

    const createNewTeam = () => {
        setTeamName('');
        setCurrentTeam([]);
        setSelectedTeamIndex(null);
        setShowAddTeam(true);
    };

    const editTeam = (index) => {
        const team = teams[index];
        setTeamName(team.name);
        setCurrentTeam(team.loomians);
        setSelectedTeamIndex(index);
        setShowAddTeam(true);
    };

    const confirmDeleteTeam = (index) => {
        setTeamToDelete(index);
    };

    const deleteTeam = () => {
        const updatedTeams = teams.filter((_, i) => i !== teamToDelete);
        setTeams(updatedTeams);
        localStorage.setItem('teams', JSON.stringify(updatedTeams));
        setTeamToDelete(null);
        setSelectedTeamIndex(null);
    };

    const cancelDelete = () => {
        setTeamToDelete(null);
    };

    const exportTeam = () => {
        const teamString = currentTeam.map(loomian => {
            const { name, attributes } = loomian;
            const { item, ability, gender, tps, ups, personality, moves } = attributes;
            const loomianData = loomiansData.find(l => l.name === name);
            const requiredItem = loomianData.requiredItem;
    
            const combinedPersonality = [
                personality.primary,
                personality.secondary,
                personality.tertiary
            ].filter(Boolean).join(', ');
    
            const tpsString = Object.entries(tps)
                .map(([stat, value]) => value > 0 ? `${value} ${stat.toUpperCase()}` : '')
                .filter(Boolean)
                .join(' / ');
    
            const upsString = Object.entries(ups)
                .map(([stat, value]) => value !== 40 ? `${value} ${stat.toUpperCase()}` : '')
                .filter(Boolean)
                .join(' / ');
    
            const movesString = moves.filter(Boolean)
                .map(move => `- ${move}`)
                .join('\n');
    
            const genderLine = gender ? `Gender: ${gender}\n` : '';
            const upLine = upsString ? `UPs: ${upsString}\n` : '';
    
            return (
                `${name} @ ${requiredItem || item}\n` +
                `Ability: ${ability}\n` +
                genderLine +
                `TPs: ${tpsString}\n` +
                upLine +
                `Personality: ${combinedPersonality}\n` +
                `${movesString}`
            );
        }).join('\n\n');
    
        navigator.clipboard.writeText(teamString).then(() => {
            setMessage('Copied to clipboard!');
            setTimeout(() => setMessage(''), 2000);
        });
    };    

    const handleImportTeam = () => {
        try {
          const parsedTeam = parseTeamString(importedTeamText);
          if (parsedTeam.length === 0) {
            setError('No valid Loomians found in imported text.');
            setTimeout(() => setError(''), 2000);
            return;
          }
      
          setCurrentTeam(parsedTeam);
          setHasUnsavedChanges(true);
      
          setTeamName('Imported Team');
          setShowImportDialog(false);
          setImportedTeamText('');
          setMessage('Team imported successfully!');
          setTimeout(() => setMessage(''), 2000);
        } catch (err) {
          setError('Failed to parse team. Please check your format.');
          setTimeout(() => setError(''), 2000);
        }
      };
      

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
                <div className="dark-mode-toggle">
  <button onClick={toggleDarkMode}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
    </div>
        <div className="App">
            <h1>Loomian Legacy Teambuilder</h1>
            <div>
                <h2>{showAddTeam ? (selectedTeamIndex === null ? 'Create New Team' : 'Edit Team') : 'Manage Teams'}</h2>

                {!showAddTeam ? (
                    <>
                        <button onClick={() => { createNewTeam(); setHasUnsavedChanges(false); }}>Add New Team</button>
                        <div>
                            <h2>Saved Teams</h2>
                            {teams.map((team, index) => (
                                <div key={index} className="saved-team" onClick={() => editTeam(index)} style={{ cursor: 'pointer' }}>
                                    <h3>{team.name}</h3>
                                    <div className="loomian-icons">
                                    {team.loomians.map((loomian, idx) => {
                                        const loomianData = loomiansData.find((l) => l.name === loomian.name);
                                        const itemName = loomianData.requiredItem || loomian.attributes.item;
                                        const itemData = itemName ? itemsData.find((item) => item.name === itemName) : null;

                                        return (
                                            <div className="loomian-with-item">
                                                <img src={loomianData.icon} alt={loomian.name} className="loomian-icon" />
                                                {itemData && (
                                                    <img src={itemData.icon} alt={itemData.name} className="loomian-item-icon" />
                                                )}
                                            </div>
                                        );
                                    })}
                                    </div>
                                    <button className="delete-button" onClick={(e) => { e.stopPropagation(); confirmDeleteTeam(index); }}>🗑️</button>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <label>Team Name: </label>
                            <input
                                type="text"
                                value={teamName}
                                onChange={(e) => { setTeamName(e.target.value); setHasUnsavedChanges(true); }}
                                placeholder="Enter team name"
                            />
                        </div>
                        <div>
                            <h2>Select Loomian</h2>
                            <LoomianDropdown 
                                selectedLoomian={selectedLoomian}
                                onSelectLoomian={(loomianName) => { setSelectedLoomian(loomianName); setHasUnsavedChanges(true); }}
                            />
                            <button onClick={addLoomianToTeam}>Add Loomian</button>
                            {error && <div className="error">{error}</div>}
                        </div>

                        <div>
                            <h2>Current Team</h2>
                            {currentTeam.map((loomian, index) => (
                                <div key={index} className="loomian-container-teambuild">
                                    <div className="teambuilder-editor">
                                        <div className="loomian-header">
                                            <img src={loomiansData.find((l) => l.name === loomian.name).icon} alt={loomian.name} />
                                            <span>{loomian.name}</span>
                                            <div className="type-badges">
                                                {loomian.types.primary !== 'None' && <TypeBadge type={loomian.types.primary} />}
                                                {loomian.types.secondary !== 'None' && <TypeBadge type={loomian.types.secondary} />}
                                            </div>
                                            <div className="button-group">
                                                <button onClick={() => handleToggleEditor(index)}>
                                                    {expandedIndex === index ? 'Collapse' : 'Expand'}
                                                </button>
                                                <button onClick={() => removeLoomianFromTeam(index)}>Remove</button>
                                            </div>
                                        </div>
                                        <div className="loomian-builder">
                                            {expandedIndex === index && (
                                                <LoomianEditor
                                                    loomian={loomian}
                                                    onSave={(attributes) => updateLoomianAttributes(index, attributes)}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <button onClick={saveTeam}>{selectedTeamIndex !== null ? 'Save Changes' : 'Add Team'}</button>
                            <button onClick={exportTeam}>Export Team</button>
                            <button onClick={() => setShowImportDialog(true)}>Import Team</button>
                            <button onClick={handleBackToTeams}>Back to Teams</button>
                            {message && <div className="message">{message}</div>}
                        </div>
                    </>
                )}

                {showImportDialog && (
                <div className="import-dialog">
                    <h3>Import Team</h3>
                    <textarea
                    value={importedTeamText}
                    onChange={(e) => setImportedTeamText(e.target.value)}
                    rows={10}
                    cols={50}
                    placeholder="Paste your exported team here..."
                    />
                    <div>
                    <button onClick={handleImportTeam}>Import</button>
                    <button onClick={() => setShowImportDialog(false)}>Cancel</button>
                    </div>
                </div>
                )}


                {showUnsavedChangesDialog && (
                    <div className="unsaved-changes-dialog">
                        <p>You have unsaved changes. Are you sure you want to leave without saving?</p>
                        <button onClick={confirmUnsavedChanges}>Yes</button>
                        <button onClick={cancelUnsavedChangesDialog}>No</button>
                    </div>
                )}
            </div>
            {teamToDelete !== null && (
                <div className="confirmation-dialog">
                    <p>Are you sure you want to delete {teams[teamToDelete].name}?</p>
                    <button onClick={deleteTeam}>Yes</button>
                    <button onClick={cancelDelete}>No</button>
                </div>
            )}

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

export default Teambuilder;
