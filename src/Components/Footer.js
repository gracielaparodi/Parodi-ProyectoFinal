import React from 'react'
import Facebook from './Assets/Imagenes/facebook1.png';
import Twitter from './Assets/Imagenes/twitter1.png';
import Instagram from './Assets/Imagenes/instagram1.png';
import silhoutte2 from './Assets/Imagenes/silhouette2.png';

export default function Footer() {
    return (

        <>
           <div className="silhoette2"> <img src={silhoutte2}  className="App-logo" alt="logo" width={50}/>Naoko Takeuchi © Tōei Animation ©</div> 
        
        
            <div class="redes">
            <div class="redes1"> <a href="https://es-la.facebook.com/"> <img src={Facebook} alt="Facebook" width={45} /></a></div>
            <div class="redes1"><a href="https://twitter.com/"><img src={Twitter} alt="Twitter" width={45} /></a></div>
            <div class="redes1"> <a href="https://www.instagram.com/"> <img src={Instagram} alt="Instagram" width={45} /></a></div>
        </div></>
    )
}