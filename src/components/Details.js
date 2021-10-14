/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, loadCountry } from '../redux/countries/countries';
import Region from './Region';

const Details = ({ match }) => {
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
    dispatch(loadCountry(true));
  }, []);

  const country = countries.find(
    (country) => country.id.toString() === match.params.id.toString(),
  );

  if (countries.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <main>
        <h2>{country.name.toUpperCase()}</h2>
        <h3>
          {'Confirmed Cases: '}
          {country.today_confirmed}
        </h3>
        <h3>
          {'Confirmed Deaths: '}
          {country.today_deaths}
        </h3>
      </main>
      <section>
        <h4>STATS BY REGIONS</h4>
        <ul className="regions">
          {country.regions.map((r) => (
            <Region key={r.name} region={r} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Details;
