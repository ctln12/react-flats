import React from 'react';

const Flat = (props) => {
  const { flatInfo } = props;
  return (
    <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flatInfo.imageUrl})` }}>
      <div className="card-category">
        {flatInfo.price}
        {flatInfo.priceCurrency}
      </div>
      <div className="card-description">
        <h2>{flatInfo.name}</h2>
      </div>
      <a className="card-link" href="#"></a>
    </div>
  );
};

export default Flat;
