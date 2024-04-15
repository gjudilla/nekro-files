import React, { useState } from 'react';
import objectiveFront from '../../assets/objective-front.png';
import objectiveBack from '../../assets/objective-back.png';

function StageI_1() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className=" p-4 h-full flex items-center justify-center">
      <span className="text-futuristic font-semibold text-xl text-blue-400 tracking-widest">
        Stage I_1
      </span>
    </div>
  );
}

export default StageI_1;
