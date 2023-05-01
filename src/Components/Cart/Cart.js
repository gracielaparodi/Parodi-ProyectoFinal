import React, { useContext } from "react";
import {CartContext} from "../Cart/CartContext";
import { Link } from "react-router-dom";
import DeleteProduct from '../Assets/Imagenes/delete-product.png';
import logo from '../Assets/Imagenes/logo.png';


const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container-fluid py-5">
                <div>
                    <div className="container-fluid col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">¡No se encontraron productos en el Carrito!</div>
                        <Link to={"/"} ><img src={logo} className="App-logo" alt="logo" width={50} /></Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-end" colSpan={5}><button><Link onClick={clear} className="botoncart" title="Vaciar Carrito">Vaciar Carrito</Link></button></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th>Producto</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody className="container-fluid">
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.pictureUrl} alt={item.name} width={64} /></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="align-middle">{item.stock}</td>
                                    <td className="align-middle">USD {item.precio}</td>
                                    <td className="text-end align-middle"><button><Link onClick={() => {removeItem(item.id)}} className="botoncart" title="Eliminar Producto"><img src={DeleteProduct} alt={"Eliminar Producto"} className="deleteboton" width={32} />Eliminar Producto</Link></button></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="align-middle">Suma Total</td>
                                <td className="align-middle"><b>USD {sumTotal()}</b></td>
                                <td className="text-end"><button><Link to={"/checkout"} className="botoncart"  title="Finalizar Compra">Finalizar Compra</Link></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;