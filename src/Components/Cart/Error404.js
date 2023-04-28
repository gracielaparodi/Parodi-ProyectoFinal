import React from "react";
import search from "../Assets/Imagenes/search.png";

const Error404 = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <h1>Error 404</h1>
                    <br/>
                    <h3>¡La página que buscas no existe!</h3>
                    <br/>
                    <img src={search} alt="search" width={400}/>
                </div>
            </div>
        </div>
    )
}

export default Error404;