import React from 'react';
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
        <PhotoContainer />
      </>
    </SearchProvider>
  );
}

export default App;