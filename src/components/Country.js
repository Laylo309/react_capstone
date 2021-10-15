import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { LinkContainer } from 'react-router-bootstrap';

const Country = (props) => {
  const { country, filter } = props;
  let ans = (
    <div className="d-flex justify-content-center align-items-center min-height">
      <div className="spinner" />
    </div>
  );

  if (country) {
    ans = Object.values(country).filter(({ name }) => (
      name.toLowerCase().startsWith(filter.toLowerCase())
    )).map((country, index) => (
      <LinkContainer key={country.id} to={`/country/${country.id}`}>
        <div
          className={`
            col-6 d-flex flex-column justify-content-between
            ${([1, 0, 0, 1][index % 4]) ? 'intense-magenta' : 'light-magenta'}
          `}
        >
          <span className="text-white mt-1 mb-4 h5" />
          <span className="text-white pointer">
            <h5 className="d-inline-block m-0 text-end fw-bold">{country.name.toUpperCase()}</h5>
            <p>
              Infections:
              {' '}
              {
                Number(country.today_confirmed).toLocaleString()
              }
              <GoChevronRight style={{ marginLeft: '9rem' }} />
            </p>

          </span>
        </div>
      </LinkContainer>
    ));
  }

  return ans;
};

export default Country;
