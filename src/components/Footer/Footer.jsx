import React  from 'react'
import Logo from '../Assets/Logo.png'
import Instagram from '../Assets/Instagram.png'
import Facebook from '../Assets/Facebook.png'
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles({
  footerContainer: {
    width: '100%',
    fontSize: '16px',
    backgroundColor: '#f1f1f1',
    paddingLeft: '0px',
    paddingRight: '0px',
    margin: '0',
  },
  footerAfter: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'fit-content',
    paddingTop: '32px',
  },
  imgLogo: {
    width: '240px',
    padding: '20px',
  },
  imgSocialNetwork: {
    width: '48px',
    marginRight: '20px',
    textAlign: 'left',
  },
  footerBefore: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    color:'#5b1a6b',
    marginLeft: '20px',
    
    fontSize: '16px',
  },
  contact: {
    
  },
  private: {
    padding: '20px',
    textAlign: 'right',
    marginRight: '20px',
  },

})
export default function Footer() {
    const classes = useStyle()
    return(
        <>
        <div className={classes.footerContainer}>
        <div className={classes.footerAfter}>
          <div> 
            <img src={Logo} alt="logo" className={classes.imgLogo} />
            </div>
          <div>
            <img src={Facebook} alt="facebook" className={classes.imgSocialNetwork} />    
            <img src={Instagram} alt="facebook" className={classes.imgSocialNetwork} /> 
          </div>
        </div>
        <div className={classes.footerBefore}>
            <div className={classes.contact}>
                <p>Tabasco 311 - Piso 4</p>
                <p>Roma Norte, CDMX 06700.</p><br></br>
            
                <p>hola@moradauno.com</p>
                <p>55 8526 6367</p>
                <p>55 7138 9205</p>
            </div>
            
              <div className={classes.private}>
                <p>Terminos y condiciones</p>
                <p>Dudas</p>
                <p>Aviso de privacidad</p>
              </div>
            </div>
            </div>
        </>
    )
}