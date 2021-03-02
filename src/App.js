import React from 'react';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';


const App = () => {
  return (
    <>
    <SearchForm />
    <Nav />
    <PhotoContainer />
    </>
   );
}
 
export default App;