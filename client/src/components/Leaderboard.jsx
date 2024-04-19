import React from 'react';
// import FactionPic from './FactionPic'; // Make sure this path is correct
import PointCounter from './PointCounter'; // Make sure this path is correct

const Leaderboard = () => {
  return (
    <div className="bg-white bg-opacity-25 p-4 h-full rounded-lg text-xl font-bold text-white flex flex-col items-center justify-center space-y-4">
      {/* <FactionPic /> */}
      <PointCounter />
    </div>
  );
};

export default Leaderboard;
