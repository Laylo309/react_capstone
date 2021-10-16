import { useEffect } from 'react';
import {
  Route, Switch, useLocation,
} from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
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
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
}
export default App;
