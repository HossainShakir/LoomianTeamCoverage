import React from 'react';
import ReactDOM from 'react-dom';
import TeamTypeCalculator from './components/TeamTypeCalculator';
import TypeCoverageCalculator from './components/TypeCoverageCalculator';
import MovesetSearchCalculator from './components/MovesetSearchCalculator';
import './App.css';

function renderApp(Component) {
    ReactDOM.render(<Component />, document.getElementById('root'));
}

document.getElementById('team-type-calculator-btn').addEventListener('click', () => {
    renderApp(TeamTypeCalculator);
});

document.getElementById('type-coverage-calculator-btn').addEventListener('click', () => {
    renderApp(TypeCoverageCalculator);
});

document.getElementById('moveset-search-calculator-btn').addEventListener('click', () => {
    renderApp(MovesetSearchCalculator);
});

// Default view
renderApp(TeamTypeCalculator);
