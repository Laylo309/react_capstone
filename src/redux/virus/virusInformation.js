export const FETCH_VIRUS = 'data/FETCH_VIRUS';

const LOAD_COUNTRIES = 'countries/LOAD_COUNTRIES';
const initialState = {};

const loadCountries = (payload) => ({
  type: LOAD_COUNTRIES,
  payload,
});

export const fetchVirus = async (dispatch) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  await fetch(`https://api.covid19tracking.narrativa.com/api/${currentDate}`)
    .then((response) => response.json())
    .then((data) => {
      const totalConfirmed = data.total.today_confirmed;
      const { countries } = data.dates[currentDate];
      dispatch(loadCountries({ countries, totalConfirmed }));
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
