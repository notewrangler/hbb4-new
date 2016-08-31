import React from 'react';
import { Component } from 'react';
import SeriesSplash from './SeriesSplash';
import SeriesPanel from './SeriesPanel';


class Series extends Component {
  render() {
    return (
      <div>
				<SeriesSplash />
        <SeriesPanel />
      </div>

    );
  }
}

export default Series;
