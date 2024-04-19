import React, { useState } from 'react';
import backImage from "../../../../server/seeds/assets/objectiveCardAssets/Stage-1-assets/stage-1-back-icon.jpg";
import ObjectiveCardApp from '../ObjectiveCardModal';

function StageI_1() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedFrontImage, setSelectedFrontImage] = useState(backImage);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSelect = option => {
    // Update the selected front image based on the option selected from the modal
    setSelectedFrontImage(option);
  };
console.log(selectedFrontImage);
  return (
    <div className="relative" onClick={handleFlip} >
      {isFlipped ? (
        <ObjectiveCardApp onSelect={handleSelect} />
      ) : (
        <img src={selectedFrontImage.name} alt="Front" />
        // <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        // <p>{selectedFrontImage.name}</p>
        // </button>
      )}
    </div>
  );
}

export default StageI_1;

