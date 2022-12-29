import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartEcommerce, setCartecommerce] = useState([]);


    const addItem = (productoAdd) => {
        if (!isInCart(productoAdd.id)) {
            setCartecommerce([...cartEcommerce, productoAdd]);
        }
    }

    const isInCart = (id) => {
        return cartEcommerce.some(cartProd => cartProd.id === id);
    }

    const removeItem = (id) => {
        const updatedCartecommerce = cartEcommerce.filter(cartProd1 => cartProd1.id !== id);
        setCartecommerce(updatedCartecommerce);
    }
    const clearCart = () => {
        setCartecommerce([]);
    }
    const getCantidad = () => {
        let totalCantidad = 0;
        cartEcommerce.forEach(product => {
            totalCantidad += product.quantityToadd;
        })
        return totalCantidad;
    }
    const getTotalcarrito=()=>{
        let acum=0

        cartEcommerce.forEach(product=>{
            acum += product.quantityToadd * product.price
        })
        return acum;
    }
    
    return (
        <CartContext.Provider value={{ cartEcommerce, addItem, removeItem, clearCart, isInCart, getCantidad ,getTotalcarrito}}>
            {children}
        </CartContext.Provider>
    )
}