import React, { useState } from 'react';
import PointCounter from './PointCounter'; // Make sure this path is correct

const Leaderboard = ({ playerFactions }) => {
  return (
    <div className="bg-white bg-opacity-25 p-4 h-full rounded-lg text-xl font-bold text-white flex flex-wrap items-center justify-center space-y-4">
      {playerFactions.map((faction, index) => (
        <div key={index} className="flex flex-col items-center space-x-2 m-2">
          {faction.icon ? (
            <img src={faction.icon} alt={faction.name} className='h-20 w-20'></img>
          ) : (
            // <img src="../public/images/faction-blank-icon.png" className='h-20 w-20 rounded-full' />
            null
          )}
          <PointCounter />
        </div>
      ))}
    </div>

  );
};

export default Leaderboard;
