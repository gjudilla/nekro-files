import React, { useState } from 'react';
import backImage from "../../../../server/seeds/assets/objectiveCardAssets/Stage-II-assets/stage-II-back.jpg";
import ObjectiveCardApp from '../ObjectiveCardModal';

function StageII_2() {
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

export default StageII_2;