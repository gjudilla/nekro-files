import React from 'react';
import testFaction from "../../public/images/faction-blank-icon.png"


//import defaultImage from '../path/to/your/default-placeholder-image.jpg'; // Replace with the actual path

const FactionPic = () => {
  return (
    <img
      src={testFaction}
      alt=""
      className="w-24 h-24 bg-gray-300 rounded-full"
    />
  );
};

export default FactionPic;
