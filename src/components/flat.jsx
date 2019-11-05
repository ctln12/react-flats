import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat, index } = this.props;
    selectFlat(index);
  }

  render() {
    const { flatInfo, selected } = this.props;
    return (
      <div className={`card${selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flatInfo.imageUrl})` }}>
        <div className="card-category">
          {`${flatInfo.price} ${flatInfo.priceCurrency}`}
        </div>
        <div className="card-description">
          <h2>{flatInfo.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Flat;
