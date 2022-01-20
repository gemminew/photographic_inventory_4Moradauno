import React, {useState} from 'react'
import Login from './components/Login/Login'
import  FilesProvider  from './Context/filesContext'
import Stepper from './components/Stepper';
import PersistentDrawerRight from './components/Main/Main'


function App() {
 //const [user, setUser] = useState(null);

  return (
    <FilesProvider>
      <PersistentDrawerRight></PersistentDrawerRight>
      <h1>Morada uno</h1>
    </FilesProvider>
  );
}

export default App;