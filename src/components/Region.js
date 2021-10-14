/* eslint-disable react/prop-types */
import React from 'react';

const Region = ({ region }) => (
  <li>
    <h2>{region.name}</h2>
    <div className="region-confirmed">
      <h3>
        {'Confirmed Cases: '}
        <br />
        {region.today_confirmed}
      </h3>
      <h3>
        {'Confirmed Deaths: '}
        <br />
        {region.today_deaths}
      </h3>
    </div>
  </li>
);

export default Region;
