// Eyes.jsx
import React from 'react';

const Eyes = ({ type }) => {
  let eyeStyle;

  switch (type) {
    case 'blue':
      eyeStyle = {
        height: '20px',
        width: '60px',
        backgroundColor: 'blue',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      };
      break;
    case 'green':
      eyeStyle = {
        height: '20px',
        width: '60px',
        backgroundColor: 'green',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      };
      break;
    default:
      eyeStyle = {
        height: '20px',
        width: '60px',
        backgroundColor: 'black',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      };
  }

  return (
    <div style={eyeStyle}>
      <div
        style={{
          height: '10px',
          width: '10px',
          backgroundColor: 'white',
          borderRadius: '50%',
          margin: '0 5px',
        }}
      />
      <div
        style={{
          height: '10px',
          width: '10px',
          backgroundColor: 'white',
          borderRadius: '50%',
          margin: '0 5px',
        }}
      />
    </div>
  );
};

export default Eyes;