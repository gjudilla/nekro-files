import React, { useState } from 'react';
import FactionPic from './FactionPic'; // Make sure this path is correct
import PointCounter from './PointCounter'; // Make sure this path is correct


const Leaderboard = () => {

  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedFrontImage, setSelectedFrontImage] = useState(backImage);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSelect = option => {
    // Update the selected front image based on the option selected from the modal
    setSelectedFrontImage(option.image); // Assuming option is an object with an image property
  };
  return (
    <>
      <div className="bg-white bg-opacity-25 p-4 h-full rounded-lg text-xl font-bold text-white flex items-center justify-center">

        <div className="flex flex-col items-center justify-center">
          <div className="relative" onClick={handleFlip} >
            {isFlipped ? (
              <FactionPic onSelect={handleSelect} />
            ) : (
              <img src={selectedFrontImage} alt="Front" />
            )}
          </div>
          <div>
            <PointCounter />
          </div>
        </div>

      </div>
    </>
  );
};

export default Leaderboard;