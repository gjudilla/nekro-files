import React, { useState } from 'react';
import backImage from "../../../public/images/objectiveCardAssets/Stage-1-assets/stage-1-back-icon.jpg";
import ObjectiveCardApp from '../ObjectiveCardModal';

function StageI_1() {
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
    <div className="relative rounded-lg" onClick={handleFlip} >
      {isFlipped ? (
        <ObjectiveCardApp onSelect={handleSelect} className="rounded-lg" />
      ) : (
        <img src={selectedFrontImage} alt="Front" className='rounded-lg' />
      )}
    </div>
  );
}

export default StageI_1;


