import React, { useState } from 'react';
import '../App.css'; 

const changelog = `
- Added Specialty Gloves and Specialty Goggles
- Added Nymesis, Banooh, Banokey, Spirwix, Malevowax, Grievestone, and Obelost
- Added New Moves to Moveset Searcher
`;

const LastUpdated = () => {
    const [showChangelog, setShowChangelog] = useState(false);

    const handleOverlayClick = () => {
        setShowChangelog(true);
    };

    const handleCloseClick = () => {
        setShowChangelog(false);
    };

    return (
        <div>
            <div id="last-updated-overlay" onClick={handleOverlayClick}>
                Last Updated: 2024-10-19
            </div>
            {showChangelog && (
                <div className="changelog-overlay">
                    <div className="changelog-content">
                        <h2>Changelog</h2>
                        <pre>{changelog}</pre>
                        <button onClick={handleCloseClick}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LastUpdated;
