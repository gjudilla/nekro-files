import React from 'react';
//import defaultImage from '../path/to/your/default-placeholder-image.jpg'; // Replace with the actual path

const FactionPic = ({ src = defaultImage, alt = 'Placeholder' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-24 h-24 bg-gray-300 rounded-full"
    />
  );
};

export default FactionPic;
