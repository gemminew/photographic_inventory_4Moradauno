import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { FilesProvider } from './context/filesContext';
import Stepper from './components/Stepper'

//import { FilesProvider } from './context/filesContext'
import GetStepContent from './components/Stepper'
import SearchContract from './components/SearchContract/SearchContract';


function App() {

  return (
    <Router>
      <FilesProvider>
        {/* <Header/> */}
        <SearchContract></SearchContract>
        {/* <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/section" element={<Stepper/> } />
        </Routes> */}
        <Footer/>
      </FilesProvider>
    </Router>
    
  );
}

export default App;