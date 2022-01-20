
import React from 'react'
// import Login from './components/Login/Login'
import { FilesProvider } from './context/filesContext'
// import Stepper from './components/Stepper';
import BasicModal from './Modal/Modal';
// import PersistentDrawerRight from './PersistentDrawer/PersistentDrawer'

function App() {
  return (
    <FilesProvider>
    {/* <Login/>
    <Stepper></Stepper> */}
    <BasicModal/> 
    {/* <PersistentDrawerRight/> */}
    <h1>Morada uno</h1>
  </FilesProvider>
);
}
export default App;
