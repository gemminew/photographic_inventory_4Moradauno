import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { FilesProvider } from './Context/filesContext';
// import ModalGaleria from './Modal/ModalGaleria';
//import { FilesProvider } from './context/filesContext'
import GetStepContent from './components/Stepper'


function App() {

  return (
    // <Router>
    //   <FilesProvider>
    //     <Header/>
    //     <Routes>
    //     <Route path="/" element={<Main/>} />
    //     </Routes>
    //     <Footer/>
    //   </FilesProvider>
    // </Router>
    // <ModalGaleria></ModalGaleria>
 
<GetStepContent></GetStepContent>

  );
}

export default App;