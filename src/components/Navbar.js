import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backHome } from '../redux/countries/countries';
import back from '../img/back.svg';

const Navbar = () => {
  const dispatch = useDispatch();
  const countrySelected = useSelector(
    (state) => state.countries.countrySelected,
  );

  if (countrySelected) {
    return (
      <header>
        <nav>
          <Link
            className="back-button"
            to="/home"
            onClick={() => {
              dispatch(backHome());
            }}
          >
            <img src={back} alt="Logo" width="30" />
          </Link>
          <Link
            to="/home"
            onClick={() => {
              dispatch(backHome());
            }}
          >
            <h1>Covid-19 World Track</h1>
          </Link>
        </nav>
      </header>
    );
  }
  return (
    <header>
      <nav>
        <Link
          to="/home"
          onClick={() => {
            dispatch(backHome());
          }}
        >
          <h1>Covid-19 World Track</h1>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
