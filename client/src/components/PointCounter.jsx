import React, { useState } from 'react';

const PointCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="flex items-center">
      <button onClick={decrement} className="text-white font-bold py-2 px-4 rounded-l">
        <span>&larr;</span> {/* Left arrow */}
      </button>
      <div className="text-white font-bold py-2 px-4">
        {count}
      </div>
      <button onClick={increment} className="text-white font-bold py-2 px-4 rounded-r">
        <span>&rarr;</span> {/* Right arrow */}
      </button>
    </div>
  );
};

export default PointCounter;
