import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import '../Cart/Cart.css';
const Cart = () => {
    const { cartEcommerce, removeItem, clearCart, getTotalcarrito } = useContext(CartContext);
    const totalCompra = getTotalcarrito()

    return (

        <div className={`${cartEcommerce.length === 0 ? 'botonesRedir' : 'carrito'}`}>
            {!Array.isArray(cartEcommerce) || cartEcommerce.length === 0 ?

                <div>
                    <h2>Tu carrito esta vacio</h2>
                    <img className="carritoVacio" src={'../images/imagenCarritovacio.png'} alt='Carrito de compras' />
                    <h5 className="textoEpigrafe">Todavía no sabes que comprar?</h5>
                    <h5 className="textoEpigrafe">Tenemos los productos que necesitas</h5>
                </div> :

                <div>
                    <h1>Detalle de las compras realizadas</h1>
                    {cartEcommerce.map(prod => {
                        return (

                        


                                <div key={prod.id}>

                                    <Card className="carritoCard">

                                        <h4>{prod.name}</h4>
                                        <h4 className="datosCarrito">Cant:{prod.quantityToadd}</h4>

                                        <h4>${prod.price}</h4>
                                        <h4>{prod.quantityToadd}</h4>
                                        <Button onClick={() => { removeItem(prod.id) }} style={{ width: '200px', alignSelf: 'center', marginLeft: '150px' }} >Borrar producto</Button>
                                    </Card>


                                </div>

                            


                        )

                    })}
                    <h3>Total: ${totalCompra}</h3>
                </div>




            }

            {cartEcommerce.length !== 0 ?
                <div>
                    <Button onClick={() => (clearCart())}>Limpiar carrito</Button>
                    <Button as={Link} to='/' style={{ marginLeft: '5%' }}>Volver</Button>
                    <Button as={Link} to='/checkout' className="compraFinalizada">Terminar compra </Button>
                </div>
                : <Button as={Link} to='/'>Volver al inicio</Button>

            }

        </div>
    )
}
export default Cart;