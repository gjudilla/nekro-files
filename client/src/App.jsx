import React from 'react';
import Dashboard from './components/Dashboard';
import './main.css';
import backgroundImage from './assets/TI_background.png';


function App(){
    return (
      // Add a div with your Tailwind CSS background image classes here
      <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage:  `url(${backgroundImage})` }}>
        <Dashboard phase="action" />
        {/* Other components if any */}
      </div>
    );
  }

export default App;
