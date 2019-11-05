import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const { flats, selectedFlat, selectFlat } = props;
  return (
    <div className="flat-list">
      {flats.map((flat, index) => {
        return (
          <Flat
            flatInfo={flat}
            key={flat.id}
            selected={flat.name === selectedFlat.name}
            index={index}
            selectFlat={selectFlat}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
