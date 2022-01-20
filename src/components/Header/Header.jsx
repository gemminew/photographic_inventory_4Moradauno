import React, { useContext } from "react";
import {
  signOut,
} from "firebase/auth";

import { auth } from "../../Firebase/config";
import { FilesContext } from "../../context/filesContext"


const Header = () => {

    const {user} = useContext(FilesContext)

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      
      {user ? <button onClick={logout}> Saquese </button> : null}

    </div>
  );
}

export default Header;

