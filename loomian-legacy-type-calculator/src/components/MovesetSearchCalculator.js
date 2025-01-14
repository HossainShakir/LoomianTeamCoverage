import React, { useState, useEffect } from 'react';
import loomiansData from './loomiansData';
import movesData from './movesData';
import LastUpdated from './lastUpdated';
import '../App.css';

function MovesetSearchCalculator() {
    const [selectedMoves, setSelectedMoves] = useState(Array(4).fill(''));
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');
    const [searchAtLeastOne, setSearchAtLeastOne] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [excludeNFE, setExcludeNFE] = useState(false);
    const [excludeLC, setExcludeLC] = useState(false);

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

    const handleMoveChange = (index, value) => {
        const updatedMoves = selectedMoves.map((move, i) => (i === index ? value : move));
        setSelectedMoves(updatedMoves);
    };

    const handleCheckboxChange = () => {
        setSearchAtLeastOne(!searchAtLeastOne);
    };

    const handleExcludeNFEChange = () => {
        setExcludeNFE(!excludeNFE);
    };

    const handleExcludeLCChange = () => {
        setExcludeLC(!excludeLC);
    };

    const searchLoomians = () => {
        const filteredMoves = selectedMoves.filter(move => move !== '');

        if (filteredMoves.length === 0) {
            setError('Select at least 1 move.');
            setSearchResults([]);
            return;
        }

        setError('');

        const lowerCaseMoves = filteredMoves.map(m => m.toLowerCase());

        const results = loomiansData.filter(loomian => {
            const loomianMovesLower = loomian.moves
                ? loomian.moves.map(m => m.toLowerCase())
                : [];

            if (searchAtLeastOne) {
                return lowerCaseMoves.some(move =>
                    loomianMovesLower.includes(move)
                );
            } else {
                return lowerCaseMoves.every(move =>
                    loomianMovesLower.includes(move)
                );
            }
        });

        // Filter out NFE and LC Loomians based on the selected options
        const filteredResults = results.filter(loomian => {
            if (excludeNFE && loomian.tier === 'NFE') return false;
            if (excludeLC && loomian.tier === 'LC') return false;
            return true;
        });

        setSearchResults(filteredResults);
    };

    const resetSearcher = () => {
        setSelectedMoves(Array(4).fill(''));
        setSearchResults([]);
        setError('');
        setSearchAtLeastOne(false);
        setExcludeNFE(false);
        setExcludeLC(false);
    };

    const filterMoves = (input) => {
        if (!input) return [];
        return movesData.filter(move => move.name.toLowerCase().includes(input.toLowerCase())).map(move => move.name);
    };

    const addMoveSelector = () => {
        setSelectedMoves([...selectedMoves, '']);
    };

    const removeMoveSelector = (index) => {
        if (selectedMoves.length > 1) {
            const updatedMoves = selectedMoves.filter((_, i) => i !== index);
            setSelectedMoves(updatedMoves);
        }
    };

    return (
        <div className={darkMode ? "dark-mode" : ""}>
            <button onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button> 
            <div className="App">
                <h1>Loomian Legacy Moveset Searcher</h1>
                {selectedMoves.map((move, index) => (
                    <div key={index} className="move-selector">
                        <label htmlFor={`move-${index}`}>Select Move {index + 1}: </label>
                        <input
                            type="text"
                            id={`move-${index}`}
                            value={move}
                            onChange={(e) => handleMoveChange(index, e.target.value)}
                            list={`move-options-${index}`}
                        />
                        <datalist id={`move-options-${index}`}>
                            {filterMoves(move).map((suggestion, i) => (
                                <option key={i} value={suggestion} />
                            ))}
                        </datalist>
                        {selectedMoves.length > 4 && (
                            <button onClick={() => removeMoveSelector(index)}>Remove</button>
                        )}
                    </div>
                ))}
                <button onClick={addMoveSelector}>Add Move</button>
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="searchAtLeastOne"
                        checked={searchAtLeastOne}
                        onChange={handleCheckboxChange}
                        className="checkbox-input"
                    />
                    <label htmlFor="searchAtLeastOne" className="checkbox-label">
                        Has at least one of the inputted moves
                    </label>
                    <input
                        type="checkbox"
                        id="exclude-nfe"
                        checked={excludeNFE}
                        onChange={handleExcludeNFEChange}
                        className="checkbox-input"
                        style={{ marginLeft: '20px' }}
                    />
                    <label htmlFor="exclude-nfe" className="checkbox-label">
                        Exclude NFE
                    </label>

                    <input
                        type="checkbox"
                        id="exclude-lc"
                        checked={excludeLC}
                        onChange={handleExcludeLCChange}
                        className="checkbox-input"
                        style={{ marginLeft: '20px' }}
                    />
                    <label htmlFor="exclude-lc" className="checkbox-label">
                        Exclude LC
                    </label>
                </div>
                <button onClick={searchLoomians}>Search Loomians</button>
                <button onClick={resetSearcher}>Reset</button>
                {error && <div className="error">{error}</div>}
                <div className="search-results">
                    <h2>Search Results ({searchResults.length})</h2>
                    {searchResults.length === 0 ? (
                        <div>No results found.</div>
                    ) : (
                        <div className="loomian-grid">
                            {searchResults.map(loomian => (
                                <div key={loomian.name} className="loomian">
                                    <img src={loomian.icon} alt={loomian.name} className="loomian-icon" />
                                    <span>{loomian.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="watermark">
                    <a href="https://www.youtube.com/@SergeantShaky" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="youtube-icon" />
                    </a>
                    <span>Sergeant Shaky</span>
                </div>
                <LastUpdated />
                <style jsx>{`
                    .loomian-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                        gap: 20px;
                        margin-top: 20px;
                    }
                    .loomian {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 10px;
                        border: 1px solid #ccc;
                    }
                    .loomian-icon {
                        width: 100px;
                        height: 100px;
                        object-fit: contain;
                        margin-bottom: 10px;
                    }
                    .checkbox-container {
                        display: flex;
                        align-items: center;
                        margin-top: 10px;
                        justify-content: center;
                    }
                    .checkbox-input {
                        margin-right: 10px;
                    }
                    .checkbox-label {
                        font-size: 16px;
                    }
                `}</style>
            </div>
        </div>
    );
}

export default MovesetSearchCalculator;
