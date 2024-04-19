import React, { useState } from 'react';
import backImage from "../../../../server/seeds/assets/objectiveCardAssets/Stage-1-assets/stage-1-back-icon.jpg";
import ObjectiveCardApp from '../ObjectiveCardModal';

function StageI_3() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedFrontImage, setSelectedFrontImage] = useState(backImage);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  const handleSelect = option => {
    // Update the selected front image based on the option selected from the modal
    setSelectedFrontImage(option);
  };

  return (
    <div className="relative" onClick={handleFlip} >
      {isFlipped ? (
        <ObjectiveCardApp onSelect={handleSelect} />
      ) : (
        <img src={selectedFrontImage} alt="Front" />
      )}
    </div>
  );
}

export default StageI_3;