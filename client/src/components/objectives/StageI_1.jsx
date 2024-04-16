import React, { useState } from 'react';


function StageI_1() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="relative" onClick={handleFlip}>
     
    </div>
  );
}

export default StageI_1;