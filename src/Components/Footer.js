import React from 'react'
import Facebook from './Assets/Imagenes/facebook1.jpg';
import Twitter from './Assets/Imagenes/twitter1.jpg';
import Instagram from './Assets/Imagenes/instagram1.jpg';

export default function Footer() {
    return (
        <div class="redes">
            <div class="redes1"> <a href="https://es-la.facebook.com/"> <img src={Facebook}   alt="Facebook"/></a></div>
            <div class="redes1"><a href="https://twitter.com/"><img src={Twitter}  alt="Twitter"/></a></div>
            <div class="redes1"> <a href="https://www.instagram.com/"> <img src={Instagram}  alt="Instagram"/></a></div>
        </div >
    )
}