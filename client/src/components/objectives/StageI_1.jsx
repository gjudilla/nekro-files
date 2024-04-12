import React, { useState } from 'react';
import objectiveFront from '../../assets/objective-front.png';
import objectiveBack from '../../assets/objective-back.png';

function StageI_1() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="relative" onClick={handleFlip}>
      <img src={objectiveFront}></img>
      <img src={objectiveBack} className='hidden'></img>
    </div>
  );
}

export default StageI_1;