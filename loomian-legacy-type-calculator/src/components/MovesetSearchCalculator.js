import React, { useState } from 'react';
import loomiansData from './loomiansData';
import movesData from './movesData';
import '../App.css'; 

function MovesetSearchCalculator() {
    const [selectedMoves, setSelectedMoves] = useState(Array(4).fill(''));
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    const handleMoveChange = (index, value) => {
        const updatedMoves = selectedMoves.map((move, i) => (i === index ? value : move));
        setSelectedMoves(updatedMoves);
    };

    const searchLoomians = () => {
        const filteredMoves = selectedMoves.filter(move => move !== '');

        if (filteredMoves.length === 0) {
            setError('Select at least 1 move.');
            setSearchResults([]);
            return;
        }

        setError('');
        const results = loomiansData.filter(loomian =>
            filteredMoves.every(move => loomian.moves && Array.isArray(loomian.moves) && loomian.moves.includes(move))
        );

        setSearchResults(results);
    };

    const resetSearcher = () => {
        setSelectedMoves(Array(4).fill(''));
        setSearchResults([]);
        setError('');
    };

    const filterMoves = (input) => {
        if (!input) return [];
        return movesData.filter(move => move.toLowerCase().includes(input.toLowerCase()));
    };

    return (
        <div className="App">
            <h1>Loomian Legacy Moveset Searcher</h1>
            <p>Only works for Loomians #1-#102, simply here for testing.</p>
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
                </div>
            ))}
            <button onClick={searchLoomians}>Search Loomians</button>
            <button onClick={resetSearcher}>Reset</button>
            {error && <div className="error">{error}</div>}
            <div className="search-results">
                <h2>Search Results</h2>
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
            `}</style>
        </div>
    );
}

export default MovesetSearchCalculator;
