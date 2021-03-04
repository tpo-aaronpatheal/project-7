import React, { useContext } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import SearchContext from './components/Context';

const App = () => {
  const { activeKeyword, previousKeyword } = useContext(SearchContext);

  return (
      <>
        <SearchForm />
        <Nav />
        <Switch>
          <Route exact path={'/'} render={() => <Redirect to={`/${activeKeyword}`}/>} />
          <Route exact path={`/${previousKeyword}`} render={() => <Redirect to={`/${activeKeyword}`}/>} />
          <Route>
            <PhotoContainer />
          </Route>
        </Switch>
      </>
  );
}

export default App;