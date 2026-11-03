import { useState, useLayoutEffect } from 'react';

function readSavedDarkMode() {
    try {
        return localStorage.getItem('darkMode') === 'true';
    } catch {
        return document.documentElement.classList.contains('dark-mode');
    }
}

// Shared dark-mode state. Reads the saved setting before the first render, so switching
// calculators never renders a light frame. public/index.html applies the class on first load.
export default function useDarkMode() {
    const [darkMode, setDarkMode] = useState(readSavedDarkMode);

    useLayoutEffect(() => {
        document.documentElement.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        try {
            localStorage.setItem('darkMode', newMode);
        } catch {
            // Storage unavailable: the toggle still works for this visit.
        }
    };

    return [darkMode, toggleDarkMode];
}
