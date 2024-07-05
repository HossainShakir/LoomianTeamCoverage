import React, { useState } from 'react';
import '../App.css';

const loomiansData = [
    { name: 'Embit', moves: ['Move1', 'Move2', 'Move3', 'Move4', 'Move5', 'Move6'] },
    { name: 'Rabburn', moves: ['Move1', 'Move3', 'Move5', 'Move6'] },
    { name: 'Searknight', moves: ['Move2', 'Move4', 'Move6', 'Move7'] },
    // Add more Loomians and their moves here
];

const allMoves = ['Move1', 'Move2', 'Move3', 'Move4', 'Move5', 'Move6', 'Move7']; // Example moves

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
            filteredMoves.every(move => loomian.moves.includes(move))
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
        return allMoves.filter(move => move.toLowerCase().includes(input.toLowerCase()));
    };

    return (
        <div className="App">
            <h1>Loomian Legacy Moveset Searcher</h1>
            <p>Work in progress, simply here for testing.</p>
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
                    searchResults.map(loomian => (
                        <div key={loomian.name} className="loomian">
                            <span>{loomian.name}</span>
                        </div>
                    ))
                )}
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

export default MovesetSearchCalculator;
