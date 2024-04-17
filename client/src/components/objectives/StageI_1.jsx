import React, { useState } from 'react';
function StageI_1() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const frontImage = '/objectiveCardAssets/Stage-1-assets/amass-wealth-icon.png';
  const backImage = '/objectiveCardAssets/Stage-1-assets/build-defenses-icon.png';

  return (
    <div className="relative" onClick={handleFlip}>
      {isFlipped ? (
        <img src={backImage} alt="Back" />
      ) : (
        <img src={frontImage} alt="Front" />
      )}
    </div>
  );
}

export default StageI_1;
