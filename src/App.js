import React from 'react'
import Login from './Login/Login'
import  FilesProvider  from './Context/filesContext'
import './App.css';

function App() {
  return (
    <FilesProvider>
      <Login></Login>
      <h1>Morada uno</h1>
    </FilesProvider>
  );
}

export default App;
