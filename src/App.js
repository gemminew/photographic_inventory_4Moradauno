import React from 'react'
// import {useState} from 'react'
// import Login from './components/Login/Login'
import  FilesProvider  from './context/filesContext'
// import Stepper from './components/Stepper';
import PersistentDrawerRight from './components/Main/Main'
import BasicModal from './Modal/Modal';


function App() {
 //const [user, setUser] = useState(null);

  return (
    <FilesProvider>
      {/* <PersistentDrawerRight></PersistentDrawerRight> */}
      <BasicModal/> 
      <h1>Morada uno</h1>
    </FilesProvider>
  );
}

export default App;