import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import '../Cart/Cart.css';

const Cart = () => {
    const { cartEcommerce, removeItem, clearCart, getTotalcarrito } = useContext(CartContext);
    const totalCompra = getTotalcarrito();

    if (!Array.isArray(cartEcommerce) || cartEcommerce.length === 0) {
        return (
            <div className="cart-container">
                <div className="cart-empty">
                    <img src={'../images/imagenCarritovacio.png'} alt='Carrito vacío' />
                    <h2>Tu carrito está vacío</h2>
                    <p>¿Todavía no sabes qué comprar? ¡Tenemos los productos que necesitas!</p>
                    <Button as={Link} to='/' className="btn-primary">
                        Explorar productos
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1>Mi Carrito de Compras</h1>
            
            <div className="cart-items">
                <div className="cart-header">
                    <span>Producto</span>
                    <span>Cantidad</span>
                    <span>Precio</span>
                    <span>Subtotal</span>
                    <span>Acción</span>
                </div>
                
                {cartEcommerce.map(prod => (
                    <div key={prod.id} className="cart-item">
                        <span className="cart-item-name">{prod.name}</span>
                        <span className="cart-item-quantity">{prod.quantityToadd}</span>
                        <span className="cart-item-price">${prod.price.toLocaleString()}</span>
                        <span className="cart-item-subtotal">
                            ${(prod.price * prod.quantityToadd).toLocaleString()}
                        </span>
                        <Button 
                            className="btn-remove" 
                            onClick={() => removeItem(prod.id)}
                        >
                            Eliminar
                        </Button>
                    </div>
                ))}
            </div>
            
            <div className="cart-summary">
                <div className="cart-total">
                    <span>Total a pagar:</span>
                    <span>${totalCompra.toLocaleString()}</span>
                </div>
            </div>
            
            <div className="cart-actions">
                <Button as={Link} to='/' className="btn-outline">
                    Seguir comprando
                </Button>
                <Button onClick={clearCart} className="btn-clear">
                    Vaciar carrito
                </Button>
                <Button as={Link} to='/checkout' className="btn-checkout">
                    Finalizar compra
                </Button>
            </div>
        </div>
    );
}

export default Cart;
