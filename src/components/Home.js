import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, loadCountry } from '../redux/countries/countries';
import Country from './Country';
import Filter from './Filter';

const Home = () => {
  const [filter, setFilter] = useState('');
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.loading);
  const total = useSelector((state) => state.countries.total);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
    dispatch(loadCountry(false));
  }, []);

  return (
    <div className="hello">
      {total && (
        <main>
          <h2>WORLD</h2>
          <h3>
            {'Confirmed Cases: '}
            {total.today_confirmed || 'loading'}
          </h3>
          <h3>
            {'Confirmed Deaths: '}
            {total.today_deaths || 'loading'}
          </h3>
        </main>
      )}
      <section style={{ backgroundColor: '#EC4C8A' }}>
        <h4>STATS BY COUNTRY</h4>
        <Filter setFilter={setFilter} />
        {loading && <h2>loading...</h2>}
        <ul className="countries">
          {countries.map((country) => (
            <Country key={country.id} country={country} filter={filter} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
