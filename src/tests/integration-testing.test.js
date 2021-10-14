import { waitFor } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import { render, fireEvent, screen } from './test-utils';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

const date = new Date().toISOString().replace(/T.*/, '');

describe('testing', () => {
  const initialData = {
    data: {
      metadata: '',
      total: '',
      dates: {},
    },
  };

  initialData.data.dates[date] = {
    countries: {
      Australia: {
        date: '2021-09-07',
        id: 'australia',
        links: [
          {
            href: '/api/2021-09-04/country/australia',
            rel: 'self',
            type: 'GET',
          },
        ],
        name: 'Australia',
        name_es: 'Australia',
        name_it: 'Australia',
        regions: [
          {
            date: '2021-09-04',
            id: 'south_australia',
            links: [
              {
                href: '/api/2021-09-04/country/australia/region/south_australia',
                rel: 'self',
                type: 'GET',
              },
            ],
            name: 'South Australia',
            name_es: 'South Australia',
            name_it: 'South Australia',
            source: 'John Hopkins University',
            sub_regions: [],
            today_confirmed: 879,
            today_deaths: 4,
            today_new_confirmed: 2,
            today_new_deaths: 0,
            today_new_open_cases: 2,
            today_new_recovered: 0,
            today_open_cases: 33,
            today_recovered: 842,
            today_vs_yesterday_confirmed: 0.0022805017103761926,
            today_vs_yesterday_deaths: 0,
            today_vs_yesterday_open_cases: 0.06451612903225801,
            today_vs_yesterday_recovered: 0,
            yesterday_confirmed: 877,
            yesterday_deaths: 4,
            yesterday_open_cases: 31,
            yesterday_recovered: 842,
          },
          {
            date: '2021-09-04',
            id: 'tasmania',
            links: [
              {
                href: '/api/2021-09-04/country/australia/region/tasmania',
                rel: 'self',
                type: 'GET',
              },
            ],
            name: 'Tasmania',
            name_es: 'Tasmania',
            name_it: 'Tasmania',
            source: 'John Hopkins University',
            sub_regions: [],
            today_confirmed: 235,
            today_deaths: 13,
            today_new_confirmed: 0,
            today_new_deaths: 0,
            today_new_open_cases: 0,
            today_new_recovered: 0,
            today_open_cases: 1,
            today_recovered: 221,
            today_vs_yesterday_confirmed: 0,
            today_vs_yesterday_deaths: 0,
            today_vs_yesterday_open_cases: 0,
            today_vs_yesterday_recovered: 0,
            yesterday_confirmed: 235,
            yesterday_deaths: 13,
            yesterday_open_cases: 1,
            yesterday_recovered: 221,
          },
          {
            date: '2021-09-04',
            id: 'queensland',
            links: [
              {
                href: '/api/2021-09-04/country/australia/region/queensland',
                rel: 'self',
                type: 'GET',
              },
            ],
            name: 'Queensland',
            name_es: 'Queensland',
            name_it: 'Queensland',
            source: 'John Hopkins University',
            sub_regions: [],
            today_confirmed: 1985,
            today_deaths: 7,
            today_new_confirmed: 1,
            today_new_deaths: 0,
            today_new_open_cases: 1,
            today_new_recovered: 0,
            today_open_cases: 251,
            today_recovered: 1727,
            today_vs_yesterday_confirmed: 0.0005040322580645018,
            today_vs_yesterday_deaths: 0,
            today_vs_yesterday_open_cases: 0.0040000000000000036,
            today_vs_yesterday_recovered: 0,
            yesterday_confirmed: 1984,
            yesterday_deaths: 7,
            yesterday_open_cases: 250,
            yesterday_recovered: 1727,
          },
          {
            date: '2021-09-04',
            id: 'victoria',
            links: [
              {
                href: '/api/2021-09-04/country/australia/region/victoria',
                rel: 'self',
                type: 'GET',
              },
            ],
            name: 'Victoria',
            name_es: 'Victoria',
            name_it: 'Victoria',
            source: 'John Hopkins University',
            sub_regions: [],
            today_confirmed: 22942,
            today_deaths: 823,
            today_new_confirmed: 183,
            today_new_deaths: 0,
            today_new_open_cases: 183,
            today_new_recovered: 0,
            today_open_cases: 2047,
            today_recovered: 20072,
            today_vs_yesterday_confirmed: 0.008040775077991169,
            today_vs_yesterday_deaths: 0,
            today_vs_yesterday_open_cases: 0.09817596566523612,
            today_vs_yesterday_recovered: 0,
            yesterday_confirmed: 22759,
            yesterday_deaths: 823,
            yesterday_open_cases: 1864,
            yesterday_recovered: 20072,
          },
          {
            date: '2021-09-04',
            id: 'northern_territory',
            links: [
              {
                href: '/api/2021-09-04/country/australia/region/northern_territory',
                rel: 'self',
                type: 'GET',
              },
            ],
            name: 'Northern Territory',
            name_es: 'Northern Territory',
            name_it: 'Northern Territory',
            source: 'John Hopkins University',
            sub_regions: [],
            today_confirmed: 202,
            today_deaths: 0,
            today_new_confirmed: 0,
            today_new_deaths: 0,
            today_new_open_cases: 0,
            today_new_recovered: 0,
            today_open_cases: 9,
            today_recovered: 193,
            today_vs_yesterday_confirmed: 0,
            today_vs_yesterday_deaths: null,
            today_vs_yesterday_open_cases: 0,
            today_vs_yesterday_recovered: 0,
            yesterday_confirmed: 202,
            yesterday_deaths: 0,
            yesterday_open_cases: 9,
            yesterday_recovered: 193,
          },
          {
            date: '2021-09-04',
            id: 'new_south_wales',
            links: [
              {
                href: '/api/2021-09-04/country/australia/region/new_south_wales',
                rel: 'self',
                type: 'GET',
              },
            ],
            name: 'New South Wales',
            name_es: 'New South Wales',
            name_it: 'New South Wales',
            source: 'John Hopkins University',
            sub_regions: [],
            today_confirmed: 33792,
            today_deaths: 180,
            today_new_confirmed: 1469,
            today_new_deaths: 3,
            today_new_open_cases: 1466,
            today_new_recovered: 0,
            today_open_cases: 30350,
            today_recovered: 3262,
            today_vs_yesterday_confirmed: 0.04544751415400805,
            today_vs_yesterday_deaths: 0.016949152542372836,
            today_vs_yesterday_open_cases: 0.050754743110372535,
            today_vs_yesterday_recovered: 0,
            yesterday_confirmed: 32323,
            yesterday_deaths: 177,
            yesterday_open_cases: 28884,
            yesterday_recovered: 3262,
          },
          {
            date: '2021-09-04',
            id: 'western_australia',
            links: [
              {
                href: '/api/2021-09-04/country/australia/region/western_australia',
                rel: 'self',
                type: 'GET',
              },
            ],
            name: 'Western Australia',
            name_es: 'Western Australia',
            name_it: 'Western Australia',
            source: 'John Hopkins University',
            sub_regions: [],
            today_confirmed: 1086,
            today_deaths: 9,
            today_new_confirmed: 0,
            today_new_deaths: 0,
            today_new_open_cases: 0,
            today_new_recovered: 0,
            today_open_cases: 38,
            today_recovered: 1039,
            today_vs_yesterday_confirmed: 0,
            today_vs_yesterday_deaths: 0,
            today_vs_yesterday_open_cases: 0,
            today_vs_yesterday_recovered: 0,
            yesterday_confirmed: 1086,
            yesterday_deaths: 9,
            yesterday_open_cases: 38,
            yesterday_recovered: 1039,
          },
          {
            date: '2021-09-04',
            id: 'australian_capital_territory',
            links: [
              {
                href: '/api/2021-09-04/country/australia/region/australian_capital_territory',
                rel: 'self',
                type: 'GET',
              },
            ],
            name: 'Australian Capital Territory',
            name_es: 'Australian Capital Territory',
            name_it: 'Australian Capital Territory',
            source: 'John Hopkins University',
            sub_regions: [],
            today_confirmed: 498,
            today_deaths: 3,
            today_new_confirmed: 15,
            today_new_deaths: 0,
            today_new_open_cases: 15,
            today_new_recovered: 0,
            today_open_cases: 374,
            today_recovered: 121,
            today_vs_yesterday_confirmed: 0.03105590062111796,
            today_vs_yesterday_deaths: 0,
            today_vs_yesterday_open_cases: 0.04178272980501396,
            today_vs_yesterday_recovered: 0,
            yesterday_confirmed: 483,
            yesterday_deaths: 3,
            yesterday_open_cases: 359,
            yesterday_recovered: 121,
          },
        ],
        source: 'John Hopkins University',
        today_confirmed: 60134,
        today_deaths: 1036,
        today_new_confirmed: 1734,
        today_new_deaths: 4,
        today_new_open_cases: 1730,
        today_new_recovered: 0,
        today_open_cases: 34883,
        today_recovered: 24215,
        today_vs_yesterday_confirmed: 0.0296917808219177,
        today_vs_yesterday_deaths: 0.003875968992248069,
        today_vs_yesterday_open_cases: 0.05218230627695841,
        today_vs_yesterday_recovered: 0,
        yesterday_confirmed: 58400,
        yesterday_deaths: 1032,
        yesterday_open_cases: 33153,
        yesterday_recovered: 24215,
      },
    },
  };
  axios.get.mockResolvedValue(initialData);

  test('should render the title', async () => {
    render(<App />);
    expect(screen.getByText(/Covid-19 World Track/i)).toBeInTheDocument();
  });

  test('should load the country Australia', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/Australia/i)).toBeInTheDocument();
    });
  });

  test('should go to Australia regions when tap Australia', async () => {
    render(<App />);
    await waitFor(() => {
      fireEvent.click(screen.getByRole('link', { name: /Australia/i }));
      expect(screen.getByText(/Tasmania/i)).toBeInTheDocument();
    });
  });
});
