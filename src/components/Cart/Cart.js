import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import '../Cart/Cart.css';
const Cart = () => {
    const { cartEcommerce, removeItem, clearCart, getTotalcarrito } = useContext(CartContext);
    console.log(cartEcommerce);
    const totalCarrito = getTotalcarrito();

    return (

        <div className={`${cartEcommerce.length === 0 ? 'botonesRedir' : 'carrito'}`}>
            {!Array.isArray(cartEcommerce) || cartEcommerce.length === 0 ?

                <div>
                    <h2>Tu carrito esta vacio</h2>
                    <img className="carritoVacio" src={'../images/imagenCarritovacio.png'} />
                    <h5 className="textoEpigrafe">Todavía no sabes que comprar?</h5>
                    <h5 className="textoEpigrafe">Tenemos los productos que necesitas</h5>
                </div> :

                cartEcommerce.map(prod => {
                    return (

                        <div key={prod.id}>
                            <Card className="carrito">
                                <Card.Title>
                                    <h4>{prod.name}</h4>
                                </Card.Title>
                                <h4>${prod.price}</h4>
                                <h4>{prod.quantityToadd}</h4>
                                <Button onClick={() => { removeItem(prod.id) }} style={{ width: '300px', alignSelf: 'center' }} >Borrar producto</Button>
                            </Card>


                        </div>

                    )

                })


            }

            {cartEcommerce.length !== 0 ?
                <div>
                     <Button onClick={() => (clearCart())}>Limpiar carrito</Button>
                     <Button as={Link} to='/' style={{marginLeft:'5%'}}>Volver</Button>
                     <Button as={Link} to='/checkout' className="compraFinalizada">Terminar compra </Button>
                </div>
               : <Button as={Link} to='/'>Volver al inicio</Button>

            }



















        </div>
    )
}

{/* {cartEcommerce.length !== 0 ?  */ }
{/* <h3>Total: ${totalCarrito} </h3>
  <Button onClick={() => (clearCart())}>Limpiar carrito</Button>
  <Button style={{ marginLeft: '5px' }} as={Link} to='/'>Volver</Button>
  <Button style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '20%', alignItems: 'center', marginLeft: '40%', marginTop: '5%' }} as={Link} to='/checkout'>Terminar compra </Button>: 
  
  <Button as={Link} to='/'>Volver al inicio</Button> */}








export default Cart;