import React, { useState, useRef, useEffect } from 'react';
import loomiansData from './loomiansData.js'; // Adjust the path as necessary
import '../App.css';

const LoomianDropdown = ({ selectedLoomian, onSelectLoomian }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref for the dropdown container

    // Filter loomiansData to include only Loomians with the `stats` attribute
    const filteredLoomians = loomiansData.filter(loomian =>
        loomian.stats && loomian.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleLoomianSelect = (loomianName) => {
        if (onSelectLoomian) {
            onSelectLoomian(loomianName);
        }
        setIsDropdownOpen(false);
        setSearchQuery(''); // Clear search after selection
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        // Attach the event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="loomian-dropdown" ref={dropdownRef}>
            <div className="dropdown-header" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {selectedLoomian ? selectedLoomian : '--Select Loomian--'}
            </div>

            {isDropdownOpen && (
                <div className="dropdown-menu">
                    <input
                        type="text"
                        placeholder="Search Loomians..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="dropdown-search"
                    />
                    <div className="dropdown-options">
                        {filteredLoomians.length > 0 ? (
                            filteredLoomians.map((loomian) => (
                                <div
                                    key={loomian.name}
                                    className="dropdown-option"
                                    onClick={() => handleLoomianSelect(loomian.name)}
                                >
                                    {loomian.name}
                                </div>
                            ))
                        ) : (
                            <div className="dropdown-no-options">No Loomians found</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoomianDropdown;
