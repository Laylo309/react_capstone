import { useEffect } from 'react';
import {
  Route, Switch, useLocation,
} from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import Main from './components/Main';
import Header from './components/Header';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/country/:id">
            <CountryDetails />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </main>
    </>
  );
}
export default App;
