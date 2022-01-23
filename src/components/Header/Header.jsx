import React, { useContext } from "react";
import {
  signOut,
} from "firebase/auth";

import './Header.css'

import { auth } from "../../Firebase/config";
import {FilesContext} from '../../context/filesContext'

import logo from '../../Assets/Logo.png';
import { useNavigate } from "react-router-dom";


const Header = () => {

    const {user} = useContext(FilesContext)

    const navigate = useNavigate();
    const goToMain = () => {
      navigate("/");
    }
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="header">
      <img src={logo} alt="logo morada uno" className="header__logo"  onClick={goToMain}/>
      {user ? <button onClick={logout} className="header__logout"> LogOut </button> : null}

    </div>
  );
}

export default Header;

