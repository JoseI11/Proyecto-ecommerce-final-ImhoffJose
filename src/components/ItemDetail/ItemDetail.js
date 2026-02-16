
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({ id, name, description, price, img, stock }) => {
    
    const { addItem, isInCart, removeItem } = useContext(CartContext);

    const handleonClick = (quantityToadd) => {
        addItem({ id, name, price, quantityToadd, stock });
    }

    const isAdded = isInCart(id);
    
    return (
        <div className="product-detail-container">
            <div className="product-detail-card">
                <div className="product-detail-content">
                    <div className="product-detail-image">
                        <img 
                            src={img} 
                            alt={name}
                            width="400"
                            height="400"
                        />
                    </div>
                    <div className="product-detail-info">
                        <h2>{name}</h2>
                        <p className="product-detail-description">{description}</p>
                        <p className="product-detail-price">${price?.toLocaleString()}</p>
                        
                        {stock > 0 ? (
                            <span className="product-detail-stock available">
                                ✓ {stock} unidades disponibles
                            </span>
                        ) : (
                            <span className="product-detail-stock unavailable">
                                ✗ Sin stock disponible
                            </span>
                        )}
                        
                        <div className="product-detail-actions">
                            {isAdded ? (
                                <>
                                    <Button as={Link} to='/cart' className="btn-primary">
                                        Ver carrito
                                    </Button>
                                    <Button 
                                        className="btn-outline-secondary" 
                                        onClick={() => removeItem(id)}
                                    >
                                        Quitar del carrito
                                    </Button>
                                </>
                            ) : (
                                stock > 0 ? (
                                    <ItemCount stock={stock} onAdd={handleonClick} />
                                ) : (
                                    <Button disabled className="btn-primary">
                                        Sin stock
                                    </Button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail