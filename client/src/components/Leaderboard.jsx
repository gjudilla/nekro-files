import React from 'react';
// import FactionPic from './FactionPic'; // Make sure this path is correct
import PointCounter from './PointCounter'; // Make sure this path is correct

const Leaderboard = ({ playerFactions }) => {
  return (
    <div className="bg-white bg-opacity-25 p-4 h-full rounded-lg text-xl font-bold text-white flex flex-wrap items-center justify-center space-y-4">
      {playerFactions.map((faction, index) => (
        <div key={index} className="flex flex-row items-center space-x-2 m-2">
          <img src={faction.icon} alt={faction.name} className='h-8 w-8'></img>
          <PointCounter />
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
