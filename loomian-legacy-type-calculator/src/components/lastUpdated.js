import React, { useState } from 'react';
import '../App.css'; 

const changelog = `
- Bug fixes for Teambuilder
- Searchbar added to loomian dropdown in Teambuilder
- Added all loomians to Teambuilder
- Removed save button for each loomian in Teambuilder 
  and instead added auto-save
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
                Last Updated: 2024-08-13
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
