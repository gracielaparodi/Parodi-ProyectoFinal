import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, stock) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id);
            cart[pos].stock += stock;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, stock:stock}]);
        }
    }

    const removeItem = (id) => {
        const Productos = cart.filter(x => x.id !== id);
        setCart(Productos);
    }

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(x => x.id === id);
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.stock, 0);
    }

    const sumTotal = () => {
        return cart.reduce((total, item) => total += item.stock * item.precio, 0);
    }    

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;