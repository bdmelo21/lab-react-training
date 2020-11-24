import React from 'react';

function Rating(props) {
  let rating = Math.round(props.children);
  let image = '';
  switch (rating) {
    case 0:
      image = 'no stars for you';
      break;
    case 1:
      image = '*';
      break;
    case 2:
      image = '**';
      break;
    case 3:
      image = '***';
      break;
    case 4:
      image = '****';
      break;
    case 5:
      image = '*****';
      break;
  }
  return (
    <div>
      <h1>{image}</h1>
    </div>
  );
}

export default Rating;
