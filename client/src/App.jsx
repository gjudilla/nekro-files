import React from 'react';
import Dashboard from './components/Dashboard';
import './main.css';
import AppNavbar from './components/Navbar';

function App() {
    return (
        <>
            <AppNavbar />
            <Dashboard phase="action" /> // or "agenda" for the agenda phase
        </>
    )
}

export default App;
