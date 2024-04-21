import React, { useState } from 'react';
import backImage from "../../../public/images/objectiveCardAssets/Stage-1-assets/stage-1-back-icon.jpg";
import LawCardApp from '../LawCardModal';

function Law_1() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedFrontImage, setSelectedFrontImage] = useState(backImage);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSelect = option => {
    // Update the selected front image based on the option selected from the modal
    setSelectedFrontImage(option.icon); // Assuming option is an object with an image property
  };
  
  return (
    <div className="relative" onClick={handleFlip} >
      {isFlipped ? (
        <LawCardApp onSelect={handleSelect} />
      ) : (
        <img src={selectedFrontImage} alt="Front" />
      )}
    </div>
  );
}

export default Law_1;
