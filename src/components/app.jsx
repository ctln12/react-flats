import React from 'react';
import flats from '../../data/flats';
import FlatList from './flat_list';
import SimpleMap from './simple_map';

const App = () => {
  return (
    <div className="app">
      <FlatList />
      <SimpleMap />
    </div>
  );
};

export default App;
