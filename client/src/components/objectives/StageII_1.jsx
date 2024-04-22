import React, { useState } from 'react';
import backImage from "../../../public/images/objectiveCardAssets/Stage-II-assets/stage-II-back.jpg";
import ObjectiveCardApp from '../ObjectiveCardModal';

function StageII_1() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedFrontImage, setSelectedFrontImage] = useState(backImage);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  const handleSelect = option => {
    // Update the selected front image based on the option selected from the modal
    setSelectedFrontImage(option.image);
  };

  return (
    <div className="relative" onClick={handleFlip} >
      {isFlipped ? (
        <ObjectiveCardApp onSelect={handleSelect} />
      ) : (
        <img src={selectedFrontImage} alt="Front" className='rounded-lg' />
      )}
    </div>
  );
}

export default StageII_1;