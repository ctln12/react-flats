import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const { flats } = props;
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat flatInfo={flat} key={flat.id} />)}
    </div>
  );
};

export default FlatList;
