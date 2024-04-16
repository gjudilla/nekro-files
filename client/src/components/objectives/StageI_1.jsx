import React, { useState } from 'react';
function StageI_1() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  const frontImage = './assets/public_1.back.jpg'; 
  const backImage = './assets/1.face.jpg'; 

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
