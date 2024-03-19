// Mouth.jsx
import React from 'react';

const Mouth = ({ type }) => {
  let mouthStyle;

  switch (type) {
    case 'smile':
      mouthStyle = {
        height: '20px',
        width: '60px',
        backgroundColor: 'transparent',
        borderBottomLeftRadius: '50% 30%',
        borderBottomRightRadius: '50% 30%',
        borderTop: '5px solid black',
      };
      break;
    case 'frown':
      mouthStyle = {
        height: '20px',
        width: '60px',
        backgroundColor: 'transparent',
        borderTopLeftRadius: '50% 30%',
        borderTopRightRadius: '50% 30%',
        borderBottom: '5px solid black',
      };
      break;
    default:
      mouthStyle = {
        height: '10px',
        width: '60px',
        backgroundColor: 'black',
      };
  }

  return <div style={mouthStyle} />;
};

export default Mouth;