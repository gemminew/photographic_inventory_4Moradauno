import React, {useState} from 'react'
import Login from './components/Login/Login'
import  FilesProvider  from './Context/filesContext'
//import Stepper from './components/Stepper';
import PersistentDrawerRight from './components/Main/Main';
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
 //const [user, setUser] = useState(null);

  return (
    <FilesProvider>
      <Login></Login>
{/*     <Router>
      <Routes>
      <Route exact path="/main" element={<PersistentDrawerRight />} />
      <Route exact path="/" element={<Login />} />
      </Routes>
      </Router> */} 
    <PersistentDrawerRight></PersistentDrawerRight>
      
      <h1>Morada uno</h1>
    </FilesProvider>
  );
}

export default App;