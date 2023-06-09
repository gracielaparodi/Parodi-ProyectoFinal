import React from "react";
import { useParams, Link } from "react-router-dom";

const Thanks = () => {
    const {id} = useParams();

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-danger" role="alert">
                        <h1>Gracias por tu Compra!</h1>
                        <p>Tu Número de Compra es: <b>{id}</b></p>
                    </div>
                    <button className="botoncart"><Link className="botoncart" to={"/"}>Volver a la Página Principal</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Thanks;