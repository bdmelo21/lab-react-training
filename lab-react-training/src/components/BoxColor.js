import React from 'react';

function BoxColor(props) {
  let r = props.r;
  let g = props.g;
  let b = props.b;
  return (
    <div>
      <div
        style={{
          backgroundColor: `rgb(${r},${g},${b})`,
          width: '150px',
          height: '150px',
        }}
      >
        <p>{`rgb(${r},${g},${b})`}</p>
      </div>
    </div>
  );
}

export default BoxColor;
