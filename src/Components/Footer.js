import React from 'react'
import Facebook from './Assets/Imagenes/facebook1.png';
import Twitter from './Assets/Imagenes/twitter1.png';
import Instagram from './Assets/Imagenes/instagram1.png';

export default function Footer() {
    return (
        <div class="redes">
            <div class="redes1"> <a href="https://es-la.facebook.com/"> <img src={Facebook}   alt="Facebook" width={45}/></a></div>
            <div class="redes1"><a href="https://twitter.com/"><img src={Twitter}  alt="Twitter" width={45} /></a></div>
            <div class="redes1"> <a href="https://www.instagram.com/"> <img src={Instagram}  alt="Instagram" width={45}/></a></div>
        </div >
    )
}