import React  from 'react'
import Logo from '../Assets/Logo.png'
import Instagram from '../Assets/Instagram.png'
import Facebook from '../Assets/Facebook.png'

import './footer.css'

export default function Footer() {
    return(
        <>
        <div className='footerContainer'>
        <div className='footer-After'>
          <div> 
            <img src={Logo} alt="logo" className="img-logo" />
            </div>
          <div>
            <img src={Facebook} alt="facebook" className="img-socialNetwork" />    
            <img src={Instagram} alt="facebook" className="img-socialNetwork" /> 
          </div>
        </div>
        <div className='footer-Before'>
            <div className='contact'>
                <p>Tabasco 311 - Piso 4</p>
                <p>Roma Norte, CDMX 06700.</p><br></br>
            
                <p>hola@moradauno.com</p>
                <p>55 8526 6367</p>
                <p>55 7138 9205</p>
            </div>
            
              <div className='private'>
                <p>Terminos y condiciones</p>
                <p>Dudas</p>
                <p>Aviso de privacidad</p>
              </div>
            </div>
            </div>
        </>
    )
}