import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import countriesReducer from "../redux/countries/countries";

const rootReducer = combineReducers({ countries: countriesReducer });

const render = (
  ui,
  {
    preloadedState,
    store = createStore(rootReducer, applyMiddleware(logger, thunk)),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render };
