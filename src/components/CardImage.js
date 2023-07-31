import React from 'react';

const CardImage = ({img}) => {
  // console.log(props)
  return (
    <img
      src={img}
      className="card-img-top"
      alt="..."
    />
  );
};

export default CardImage;
