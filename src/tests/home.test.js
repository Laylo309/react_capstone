import countriesReducer, {
  requestCountries,
  loadCountries,
} from '../redux/countries/countries';

test('should return the initial state', () => {
  expect(countriesReducer(undefined, {})).toEqual({
    loading: false,
    countries: [],
    total: {},
    countrySelected: undefined,
  });
});

test('should change the loading boolean', () => {
  const initialState = {
    loading: false,
    countries: [],
    total: {},
    countrySelected: undefined,
  };
  expect(countriesReducer(initialState, requestCountries())).toEqual({
    loading: true,
    countries: [],
    total: {},
    countrySelected: undefined,
  });
});

test('should handle a todo being added to an existing list', () => {
  const payload = 'temp';
  const expectedAction = {
    type: 'react-capstone/countries/LOAD',
    payload,
  };
  expect(loadCountries(payload)).toEqual(expectedAction);
});
