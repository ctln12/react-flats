import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      allFlats: flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    const { selectedFlat, allFlats } = this.state;
    return (
      <div className="app">
        <FlatList
          flats={allFlats}
          selectedFlat={selectedFlat}
          selectFlat={this.selectFlat}
        />
      </div>
    );
  }
}

export default App;
