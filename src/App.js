import React from 'react'
import Login from './components/Login/Login'
import  FilesProvider  from './Context/filesContext'
import Stepper from './components/Stepper';


function App() {
  return (
    <FilesProvider>
      <Login></Login>
      <Stepper></Stepper>
      <h1>Morada uno</h1>
    </FilesProvider>
  );
}

export default App;
