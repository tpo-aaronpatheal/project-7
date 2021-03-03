import React from 'react';
import { Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import { SearchProvider } from './components/Context/index';

const App = () => {

  return (
    <SearchProvider >
      <>
        <SearchForm />
        <Nav />
        <Switch>
          <Route exact path={'/'}>
            <PhotoContainer />
          </Route>
          <Route exact path={'/test'}>
            <h1>hello world</h1>
          </Route>
        </Switch>
      </>
    </SearchProvider>
  );
}

export default App;