import React from 'react';
import Dashboard from './components/Dashboard';
import './main.css';

function App() {
    return (
        <Dashboard phase="action" /> // or "agenda" for the agenda phase
    )
}

export default App;
