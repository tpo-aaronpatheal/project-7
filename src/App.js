import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';

const App = ({ location }) => {
  const { pathname } = location;
  let path = pathname.substring(1);

  return (
      <>
        <SearchForm />
        <Nav />
        <Switch>
        <Route exact path={`/`}>
            <h1>some home page or whatever</h1>
        </Route>
        <Route path={pathname}>
          {console.log(location)}
          <PhotoContainer path={path}/>
        </Route>
        </Switch>
      </>
  );
}

export default withRouter(App);