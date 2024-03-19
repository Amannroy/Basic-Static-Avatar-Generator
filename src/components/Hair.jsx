import React from 'react'

const Hair = ({type}) => {

    let hairStyle;

    switch (type) {
        case 'short':
          hairStyle = {
            height: '50px',
            width: '100px',
            backgroundColor: 'brown',
            borderRadius: '50% 50% 0 0',
          };
          break;
        case 'long':
          hairStyle = {
            height: '100px',
            width: '100px',
            backgroundColor: 'brown',
            borderRadius: '50% 50% 0 0',
          };
          break;
        default:
          hairStyle = {
            height: '30px',
            width: '100px',
            backgroundColor: 'brown',
            borderRadius: '50% 50% 0 0',
          };
        }
        return <div style={hairStyle} />;
}

export default Hair;