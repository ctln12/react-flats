import React from 'react';
import flats from '../../data/flats';
import FlatList from './flat_list';
import Map from './map';

const App = () => {
  return (
    <div className="app">
      <FlatList />
      <Map />
    </div>
  );
};

export default App;
