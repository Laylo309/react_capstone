/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCountry } from '../redux/countries/countries';
import rightArrow from '../img/right-arrow.svg';

const Country = ({ country }) => {
  const dispatch = useDispatch();
  return (
    <li className="country">
      <Link
        key={country.id}
        to={`/details/${country.id}`}
        onClick={() => {
          dispatch(loadCountry(true));
        }}
        value={country.id}
      >
        {country.name.length > 10 && (
          <h2 className="long-name">{country.name.toUpperCase()}</h2>
        )}
        {country.name.length <= 10 && (
          <h2 className="short-name">{country.name.toUpperCase()}</h2>
        )}

        <h3>
          {'Confirmed Cases: '}
          <br />
          {country.today_confirmed}
        </h3>
        <h3>
          {'Confirmed Deaths: '}
          <br />
          {country.today_deaths}
        </h3>
        <span className="right-arrow">
          <img src={rightArrow} alt="" width="25" />
        </span>
      </Link>
    </li>
  );
};

export default Country;
