
import {useContext } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import '../ItemDetail/ItemDetail.css';
const ItemDetail = ({ id, name, description, price, img, stock }) => {
    
    const { addItem, isInCart,removeItem } = useContext(CartContext);

    const handleonClick = (quantityToadd) => {
    
        addItem({ id, name, price,quantityToadd,stock });

    }

    const isAdded = isInCart(id);
    return (
        <div>
            <div className='container1'>
                <Card>
                    <div className='row no-gutters'>
                        <div className='col-sm-5'>
                            <Card.Img className='imagenDetalle' variant="top" src={img} />
                        </div>
                        <div className='col-sm-7'>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <p>${price}</p>

                            </Card.Body>
                        </div>

                        <section>
                            {
                               isAdded ?<div>
                                <Button as={Link} to='/cart'>No seguir comprando</Button>
                                
                                <Button style={{marginLeft:'50px'}} onClick={()=>removeItem(id)}>
                                    Volver a comprar
                                </Button>
                             
                               </div> :
                                stock > 0 ? <ItemCount stock={stock} onAdd={handleonClick} />:<h4>Estamos sin stock actualmente</h4>
                            }

                        
                        </section>
               
                    </div>
                </Card>
            </div>

        </div>
    )
}
export default ItemDetail