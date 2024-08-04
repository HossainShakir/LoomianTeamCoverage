import React from 'react';
import ReactDOM from 'react-dom/client';
import TeamTypeCalculator from './components/TeamTypeCalculator';
import TypeCoverageCalculator from './components/TypeCoverageCalculator';
import MovesetSearchCalculator from './components/MovesetSearchCalculator';
import Teambuilder from './components/Teambuilder'; 
import './App.css';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the initial component
root.render(<TeamTypeCalculator />);

// Function to render a specific component
function renderApp(Component) {
    root.render(<Component />);
}

// Add event listeners for button clicks
document.getElementById('team-type-calculator-btn').addEventListener('click', () => {
    renderApp(TeamTypeCalculator);
});

document.getElementById('type-coverage-calculator-btn').addEventListener('click', () => {
    renderApp(TypeCoverageCalculator);
});

document.getElementById('moveset-search-calculator-btn').addEventListener('click', () => {
    renderApp(MovesetSearchCalculator);
});

document.getElementById('teambuilder-btn').addEventListener('click', () => {
    renderApp(Teambuilder);
});
