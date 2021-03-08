import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import Error from './components/Error';

const App = ({ location }) => {
  const { pathname } = location;
  let path = pathname.substring(1);

  //dynamically update document title based on path
  useEffect(() => {
    let title = path === '' ? 'flickr search' : `flickr search | ${path}`;
    document.title = title;
  },[path])

  return (
  path !== 'error/404' ?
      <>
        <SearchForm />
        <Nav />
        <Switch>
          <Route exact path={`/`}>
              <h1>some home page or whatever</h1>
          </Route>
          <Route path={pathname}>
            <PhotoContainer path={path}/>
          </Route>
        </Switch>
      </>
  :
    <>
    <SearchForm />
    <Nav />
    <Route exact path={`/error/404`}>
      <Error />
    </Route>
  </>
  )
}

export default withRouter(App);