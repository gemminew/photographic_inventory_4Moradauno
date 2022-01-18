import React from 'react'

import { FilesProvider } from './context/filesContext'
import './App.css';

function App() {
  return (
    <FilesProvider>
      <h1>Hola morada uno</h1>
    </FilesProvider>
  );
}

export default App;
