import React from 'react';

function DriverCard(props) {
  let rating = Math.round(props.rating);
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
      <div class="card" style={{ width: '500px', height: '500px' }}>
        <img
          class="card-img-top"
          src={props.img}
          alt="Card image cap"
          style={{ width: '50%', height: 'auto' }}
        ></img>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
        </div>
        <div>
          <h1>{image}</h1>
        </div>
        <h1>
          {props.car.model}-{props.car.licensePlate}
        </h1>
      </div>
    </div>
  );
}

export default DriverCard;
